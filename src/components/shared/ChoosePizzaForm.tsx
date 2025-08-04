'use client'

import { cn } from ' @/lib/utils'
import React, { useEffect, useState } from 'react'
import { useSet } from 'react-use'

import { ChooseProductProps } from '../../../types/types'
import { Button } from '../ui/ui-index'
import {
	doughTypes,
	PizzaSize,
	pizzaSizes,
	PizzaType,
} from '../../../constants/pizza'
import {
	GroupVariants,
	ProductImage,
	Title,
	IngredientItem,
} from './shared-index'
import { usePizzaOption } from '../../../hooks'

export const ChoosePizzaForm: React.FC<ChooseProductProps> = ({
	className,
	imgUrl,
	ingredients,
	name,
	productVariations,
	onClickAddCart,
}) => {
	const {
		doughType,
		selectedIngredients,
		size,
		totalPrice,
		availablePizzaSizes,
		setDoughType,
		setSize,
		addIngredient,
	} = usePizzaOption(productVariations)

	const productValues = productVariations.find(
		i => i.doughType === doughType && i.size === size
	)
	const productDescription = `${productValues?.size} sm, ${productValues?.doughType} dough`

	const handleClickAdd = () => {
		onClickAddCart?.()
		console.log({
			size,
			selectedIngredients,
		})
	}

	return (
		<div className={cn('flex flex-1', className)}>
			<ProductImage imgUrl={imgUrl} size={size} />

			<div className='w-[490px] flex flex-col flex-1 gap-5 mx-10 py-10 bg-slate-50/15 rounded-md'>
				<Title text={name} size='lg' />

				<p>{productDescription}</p>

				<p>{ingredients.map(i => i.name).join(', ')}</p>

				<div className='flex flex-col gap-1'>
					<GroupVariants
						items={availablePizzaSizes}
						selectedValue={String(size)}
						onClick={value => setSize(Number(value) as PizzaSize)}
					/>

					<GroupVariants
						items={doughTypes}
						selectedValue={String(doughType)}
						onClick={value => setDoughType(String(value) as PizzaType)}
					/>
				</div>

				<div className='mt-2 bg-gray-50/50 h-[420px] p-2 rounded-md overflow-auto scrollbar'>
					<div className='grid grid-cols-3 gap-3'>
						{ingredients.map(i => (
							<IngredientItem
								imgUrl={i.imageUrl}
								key={i.id}
								name={i.name}
								price={i.price}
								onClick={() => addIngredient(i.id)}
								active={selectedIngredients.has(i.id)}
							/>
						))}
					</div>
				</div>

				<Button
					className='w-full px-4 text-base rounded-[18px]'
					onClick={handleClickAdd}
				>
					buy for {totalPrice} $
				</Button>
			</div>
		</div>
	)
}
