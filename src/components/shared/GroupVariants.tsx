'use client'

import { cn } from '../../lib/utils'
import { ProductVariation } from '@prisma/client'
import React from 'react'
import { PizzaSize } from '../../../constants/pizza'

export type Variant = {
	name: string
	value: string
	disabled?: boolean
}

interface GroupVariantsProps {
	className?: string
	items: Variant[]
	onClick?: (value: Variant['value']) => void
	selectedValue?: Variant['value']
}

export const GroupVariants: React.FC<GroupVariantsProps> = ({
	className,
	items,
	onClick,
	selectedValue,
}) => {
	return (
		<div
			className={cn(
				'flex gap-2 w-full bg-gray-100 rounded-3xl p-1 select-none',
				className
			)}
		>
			{items.map(item => (
				<button
					key={item.name}
					onClick={() => onClick?.(item?.value)}
					className={cn(
						'flex flex-wrap flex-1 items-center justify-center gap-3 cursor-pointer h-[30px] px-5 rounded-3xl transition-all duration-400 text-xs',
						{
							'bg-white shadow': item.value?.toString() === selectedValue,
							'bg-gray-300 opacity-30 pointer-events-none':
								!item.value?.toString() || item.disabled,
						}
					)}
				>
					{`${item.name}`}
				</button>
			))}
		</div>
	)
}
