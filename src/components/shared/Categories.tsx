'use client'

import { cn } from ' @/lib/utils'
import React from 'react'
import { useCategoryStore } from '../../../store/category'

interface CategoriesProps {
	className?: string
}

const categories = [
	{ id: 1, name: 'Pizzas' },
	{ id: 2, name: 'Combo' },
	{ id: 3, name: 'Snacks' },
	{ id: 4, name: 'Cocktails' },
	{ id: 5, name: 'Coffe' },
	{ id: 6, name: 'Drinks' },
	{ id: 7, name: 'Deserts' },
]

export const Categories: React.FC<CategoriesProps> = ({ className }) => {
	const activeCategory = useCategoryStore(state => state.activeId)

	return (
		<div
			className={cn(
				'inline-flex gap-1 bg-gray-100 p-1 rounded-2xl my-4',
				className
			)}
		>
			{categories.map((category, index) => (
				<a href={`/#${category.name}`}>
					<button
						onClick={() => useCategoryStore.setState({ activeId: category.id })}
						key={index}
						className={`flex items-center font-bold h-11 rounded-2xl px-5
					${
						activeCategory === category.id &&
						'bg-white shadow-md shadow-gray-400 text-primary'
					}`}
					>
						{category.name}
					</button>
				</a>
			))}
		</div>
	)
}
