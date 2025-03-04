'use client'

import { cn } from ' @/lib/utils'
import React from 'react'
import { useCategoryStore } from '../../../store/category'
import { Category } from '@prisma/client'

interface CategoriesProps {
	className?: string
	categories: Category[]
}

export const Categories: React.FC<CategoriesProps> = ({
	className,
	categories,
}) => {
	const activeCategory = useCategoryStore(state => state.activeId)

	return (
		<div
			className={cn(
				'inline-flex gap-1 bg-gray-100 p-1 rounded-2xl my-4',
				className
			)}
		>
			{categories.map(category => (
				<a href={`/#${category.name}`} key={category.id}>
					<button
						onClick={() => useCategoryStore.setState({ activeId: category.id })}
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
