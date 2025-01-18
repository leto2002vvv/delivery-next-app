import { cn } from ' @/lib/utils'
import React from 'react'

interface CategoriesProps {
	className?: string
}

const categories = [
	'Pizzas',
	'Combo',
	'Snacks',
	'Cocktails',
	'Coffe',
	'Drinks',
	'Deserts',
]
const activeCategory = 0

export const Categories: React.FC<CategoriesProps> = ({ className }) => {
	return (
		<div
			className={cn(
				'inline-flex gap-1 bg-gray-50 p-1 rounded-2xl my-4',
				className
			)}
		>
			{categories.map((category, index) => (
				<button
					key={index}
					className={`flex items-center font-bold h-11 rounded-2xl px-5
					${
						activeCategory === index &&
						'bg-white shadow-md shadow-gray-400 text-primary'
					}`}
				>
					{category}
				</button>
			))}
		</div>
	)
}
