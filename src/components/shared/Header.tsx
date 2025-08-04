import { cn } from ' @/lib/utils'
import React from 'react'
import {
	CartButton,
	Container,
	SearchInput,
} from ' @/components/shared/shared-index'
import Image from 'next/image'
import { Button } from '../ui/ui-index'
import { ArrowRight, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'

interface HeaderProps {
	className?: string
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
	return (
		<header className={cn('border-b', className)}>
			<Container className='flex items-center justify-between py-8'>
				{/* Left Side */}
				<Link href='/' passHref>
					<div className='flex items-center gap-2'>
						<Image
							src={'/pizza-logo.png'}
							alt={'logo'}
							width={32}
							height={32}
						/>
						<div>
							<h1 className='text-2xl uppercase'>Delivery Next</h1>
							<p className='text-sm text-gray-500 leading-3'>enjoy yourself</p>
						</div>
					</div>
				</Link>

				{/* Middle Search */}
				<div className='mx-10 flex-1'>
					<SearchInput />
				</div>

				{/* Right Side */}
				<div className='flex items-center gap-4'>
					<Button variant={'outline'} className='text-primary'>
						<User size={16} />
						Sign in
					</Button>
					<div>
						<CartButton />
					</div>
				</div>
			</Container>
		</header>
	)
}
