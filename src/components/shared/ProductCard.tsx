import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Title } from './shared-index'
import { Button } from '../ui/ui-index'
import { Plus } from 'lucide-react'

interface ProductCardProps {
	className?: string
	imgUrl: string
	id: number
	name: string
	price: number
}

export const ProductCard: React.FC<ProductCardProps> = ({
	className,
	imgUrl,
	id,
	name,
	price,
}) => {
	return (
		<div className={className}>
			<Link href='/product/1'>
				<div className='flex flex-col gap-1'>
					<img width={215} height={215} src={imgUrl} alt={name} />

					<Title text={name} size='sm' />

					<p className='text-sm text-gray-400'>
						Chicken, mozzarella, tomato, mushrooms, sweet pepper, onion
					</p>

					<div className='flex items-center'>
						<p className='text-lg font-bold'>{price} €</p>
						<Button className='ml-auto bg-orange-50 border border-secondary text-black'>
							<Plus strokeWidth={4}/>
							Add to cart
						</Button>
					</div>
				</div>
			</Link>
		</div>
	)
}
