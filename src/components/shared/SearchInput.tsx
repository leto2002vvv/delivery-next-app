'use client'

import { cn } from ' @/lib/utils'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useClickAway, useDebounce } from 'react-use'
import { Api } from '../../../services/api-client'

import { Product } from '@prisma/client'

interface SearchInputProps {}

export const SearchInput: React.FC<SearchInputProps> = ({}) => {
	const [searchQuery, setSearchQuery] = React.useState('')
	const [focused, setFocused] = React.useState(false)
	const [products, setProducts] = React.useState<Product[]>([])
	const ref = React.useRef(null)

	useClickAway(ref, () => {
		setFocused(false)
	})

	useDebounce(
		() => {
			Api.products
				.search(searchQuery)
				.then(data => setProducts(data))
				.catch(error => console.error(error))
		},
		150,
		[searchQuery]
	)

	const onClickItem = () => {
		setFocused(false)
		setSearchQuery('')
		setProducts([])
	}

	return (
		<>
			{focused && (
				<div className='fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30'></div>
			)}

			<div
				ref={ref}
				className='relative flex rounded-2xl flex-1 items-center gap-1 z-40'
			>
				<Search
					size={20}
					className='absolute top-1/2 translate-y-[-50%] left-2'
				/>
				<input
					className='rounded-2xl outline-none w-full bg-gray-100 py-2 px-10'
					type='text'
					placeholder='search ...'
					onFocus={() => setFocused(true)}
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
				></input>

				{products.length > 0 && (
					<div
						className={cn(
							'absolute w-full rounded-2xl top-20 shadow-md transition-all duration-200 invisible z-30',
							focused && 'visible opacity-100 top-12 bg-gray-100'
						)}
					>
						{products.map(product => (
							<Link
								href={`/product/${product.id}`}
								key={product.id}
								className='flex items-center gap-2 px-3 py-2 hover:bg-primary/10 rounded-2xl'
								onClick={onClickItem}
							>
								<Image
									width={30}
									height={30}
									src={product.imageUrl}
									alt={product.name}
								/>
								<span>{product.name}</span>
							</Link>
						))}
					</div>
				)}
			</div>
		</>
	)
}
