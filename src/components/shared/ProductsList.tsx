'use client'

import React from 'react'
import { useIntersection } from 'react-use'
import { ProductCard, Title } from './shared-index'
import { useCategoryStore } from '../../../store/category'
import { Ingredient } from '@prisma/client'

interface ProductsListProps {
	title: string
	items: any[]
	categoryId: number
	listClassName?: string
	ingredients: Ingredient
}

export const ProductsList: React.FC<ProductsListProps> = ({
	title,
	items,
	categoryId,
	ingredients,
}) => {
	const setActiveCategoryid = useCategoryStore(state => state.setActiveId)
	const intersectionRef = React.useRef<HTMLDivElement>(
		null as unknown as HTMLDivElement
	)
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	})

	React.useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryid(categoryId)
		}
	}, [intersection?.isIntersecting])

	return (
		<div
			className='flex w-full flex-wrap justify-start gap-5'
			id={title}
			ref={intersectionRef}
		>
			<Title text={title} size='md' className='font-extrabold w-full' />

			{items.map((product, i) => (
				<ProductCard // prop imgUrl bezieht sich auf product
					className='w-[215px] mb-5'
					key={product.id}
					id={product.id}
					name={product.name}
					price={product.productVariations[0].price}
					imgUrl={product.imageUrl}
					ingredients={ingredients}
				/>
			))}
		</div>
	)
}
