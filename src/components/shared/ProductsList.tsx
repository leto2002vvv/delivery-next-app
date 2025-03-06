'use client'

import React from 'react'
import { useIntersection } from 'react-use'
import { ProductCard, Title } from './shared-index'
import { useCategoryStore } from '../../../store/category'
import { Prisma } from '@prisma/client'

type ProductWithVariationsAndIngredients = Prisma.ProductGetPayload<{
	include: {
		ingredients: true
		productVariations: true
	}
}>

interface ProductsListProps {
	title: string
	items: ProductWithVariationsAndIngredients[]
	categoryId: number
	listClassName?: string
}

export const ProductsList: React.FC<ProductsListProps> = ({
	title,
	items,
	categoryId,
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
	}, [intersection?.isIntersecting, categoryId, setActiveCategoryid])

	console.log(items)

	return (
		<div
			className='flex w-full flex-wrap justify-start gap-5'
			id={title}
			ref={intersectionRef}
		>
			<Title text={title} size='md' className='font-extrabold w-full' />

			{items.map(product => (
				<ProductCard // prop imgUrl bezieht sich auf product
					className='w-[215px] mb-5'
					key={product.id}
					id={product.id}
					name={product.name}
					price={product.productVariations[0].price}
					imgUrl={product.imageUrl}
					ingredients={product.ingredients}
				/>
			))}
		</div>
	)
}
