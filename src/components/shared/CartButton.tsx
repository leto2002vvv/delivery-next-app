import { cn } from ' @/lib/utils'
import React from 'react'
import { Button } from '../ui/ui-index'
import { ArrowRight, ShoppingCart } from 'lucide-react'
import { CartDrawer } from './CartDrawer'

interface CartButtonProps {
	className?: string
}

export const CartButton: React.FC<CartButtonProps> = ({ className }) => {
	return (
		<CartDrawer>
			<Button className='group relative'>
				<b>500 €</b>
				<span className='h-full w-[1px] bg-white/30 mx-3' />
				<div className='flex items-center gap-1 group-hover:opacity-0 transition-opacity'>
					<ShoppingCart strokeWidth={4} />
					<b>3</b>
				</div>
				<ArrowRight
					strokeWidth={4}
					className='opacity-0 absolute -translate-x-5 duration-300 right-5 group-hover:opacity-100 group-hover:translate-x-0'
				/>
			</Button>
		</CartDrawer>
	)
}
