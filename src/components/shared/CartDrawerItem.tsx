import { cn } from ' @/lib/utils'
import React from 'react'

import * as CartItem from './cart-item-details'
import { CartItemProps } from './cart-item-details/cart-item-details.types'
import { CountButton } from './CountButton'
import { Trash2Icon } from 'lucide-react'

interface CartDrawerItemProps extends CartItemProps {
	className?: string
}

const CartDrawerItem: React.FC<CartDrawerItemProps> = ({
	details,
	id,
	imageUrl,
	name,
	price,
	quantity,
	disabled,
	className,
}) => {
	return (
		<div className={cn('flex bg-white p-5 gap-6', className)}>
			<CartItem.Image src={imageUrl} />

			<div className='flex-1'>
				<CartItem.Info details={details} name={name} />

				<hr className='my-3' />

				<div className='flex items-center justify-between'>
					<CountButton onClick={type => console.log(type)} value={quantity} />

					<div className='flex items-center gap-3'>
						<CartItem.Price value={price} />
						<Trash2Icon
							className='text-gray-400 cursor-pointer hover:text-gray-600'
							size={16}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartDrawerItem
