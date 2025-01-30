import { cn } from ' @/lib/utils'
import React from 'react'
import { Container } from ' @/components/shared/shared-index'
import Image from 'next/image'
import { Button } from '../ui/ui-index'
import { ArrowRight, ShoppingCart, User } from 'lucide-react'

interface HeaderProps {
	className?: string
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
	return (
		<header className={cn('border-b', className)}>
			<Container className='flex items-center justify-between py-8'>
				{/* Left Side */}
				<div className='flex items-center gap-2'>
					<Image src={'/pizza-logo.png'} alt={'logo'} width={32} height={32} />
					<div>
						<h1 className='text-2xl uppercase'>Delivery Next</h1>
						<p className='text-sm text-gray-500 leading-3'>enjoy yourself</p>
					</div>
				</div>

				{/* Right Side */}
				<div className='flex items-center gap-4'>
					<Button variant={'outline'} className='text-primary'>
						<User size={16} />
						Sign in
					</Button>					
					<div>
						<Button className='group relative'>
							<b>500 €</b>
							<span className='h-full w-[1px] bg-white/30 mx-3' />
							<div className='flex items-center gap-1 group-hover:opacity-0 transition-opacity'>
								<ShoppingCart strokeWidth={4} />
								<b>3</b>
							</div>
							<ArrowRight strokeWidth={4} className='opacity-0 absolute -translate-x-5 duration-300 right-5 group-hover:opacity-100 group-hover:translate-x-0' />
						</Button>
					</div>
				</div>
			</Container>
		</header>
	)
}
