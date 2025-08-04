import React from 'react'

import { PizzaSize, PizzaType } from '../constants/pizza'
import { Variant } from ' @/components/shared/GroupVariants'
import { useSet } from 'react-use'
import { ProductVariation } from '@prisma/client'
import { CalcTotalPizzaPrice, getAvailablePizzaSizes } from ' @/lib/index'
import { ingredients } from '../prisma/constants'

interface ReturnProps {
	size: PizzaSize
	doughType: PizzaType
	selectedIngredients: Set<number>
	totalPrice: number
	availablePizzaSizes: Variant[]
	setSize: (size: PizzaSize) => void
	setDoughType: (doughType: PizzaType) => void
	addIngredient: (key: number) => void
}

export const usePizzaOption = (
	productVariations: ProductVariation[]
): ReturnProps => {
	const [size, setSize] = React.useState<PizzaSize>(20)
	const [doughType, setDoughType] = React.useState<PizzaType>('THICK')
	const [selectedIngredients, { toggle: addIngredient }] = useSet(
		new Set<number>([])
	)

	const availablePizzaSizes = getAvailablePizzaSizes(
		productVariations,
		doughType
	)

	const totalPrice = CalcTotalPizzaPrice(
		size,
		doughType,
		productVariations,
		ingredients,
		selectedIngredients
	)

	React.useEffect(() => {
		const currSize = availablePizzaSizes.find(
			item => Number(item.value) === size && !item.disabled
		)?.value

		const firstFoundValue = availablePizzaSizes.find(
			item => item.value && !item.disabled
		)?.value

		if (currSize) {
			setSize(Number(currSize) as PizzaSize)
		} else if (firstFoundValue) {
			setSize(Number(firstFoundValue) as PizzaSize)
		}
	}, [doughType])

	return {
		totalPrice,
		size,
		doughType,
		selectedIngredients,
		availablePizzaSizes,
		setSize,
		setDoughType,
		addIngredient,
	}
}
