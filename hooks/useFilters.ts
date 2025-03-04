import { useSearchParams } from 'next/navigation'
import { useSet } from 'react-use'
import React from 'react'

interface PriceProps {
	priceFrom?: number
	priceTo?: number
}

export interface QueryFilters extends PriceProps {
	sizes: string
	doughTypes: string
	ingredients: string
}

export interface Filters {
	sizes: Set<string>
	doughTypes: Set<string>
	selectedIngredients: Set<string>
	prices: PriceProps
}

interface ReturnProps extends Filters {
	setPrices: (name: keyof PriceProps, value: number) => void
	setDoughTypes: (value: string) => void
	setSizes: (value: string) => void
	setIngredients: (value: string) => void
}

export const useFilters = (): ReturnProps => {
	const searchParams = useSearchParams() as unknown as Map<
		keyof QueryFilters,
		string
	>

	const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
		new Set<string>(searchParams.get('ingredients'))
	)

	const [doughTypes, { toggle: toggleDoughTypes }] = useSet(
		new Set<string>(
			searchParams.has('doughTypes')
				? searchParams.get('doughTypes')?.split(',')
				: []
		)
	)

	const [sizes, { toggle: toggleSizes }] = useSet(
		new Set<string>(
			searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : []
		)
	)

	const [prices, setPrices] = React.useState<PriceProps>({
		priceFrom: Number(searchParams.get('priceFrom')),
		priceTo: Number(searchParams.get('priceTo')),
	})

	const updatePrice = (name: keyof PriceProps, value: number) => {
		setPrices(prev => ({
			...prev,
			[name]: value,
		}))
	}

	return {
		selectedIngredients,
		doughTypes,
		sizes,
		prices,
		setPrices: updatePrice,
		setDoughTypes: toggleDoughTypes,
		setSizes: toggleSizes,
		setIngredients: toggleIngredients,
	}
}
