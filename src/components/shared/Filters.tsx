'use client'

import React from 'react'
import { RangeSlider, Title, CheckboxFiltersGroup } from './shared-index'
import { Input } from '../ui/ui-index'
import {
	useIngredients,
	useFilters,
	useQueryFilters,
} from '../../../hooks/index'

export const Filters: React.FC = () => {
	const { ingredients } = useIngredients()
	const filters = useFilters()

	useQueryFilters(filters)

	const items = ingredients.map(item => ({
		value: String(item.id),
		text: item.name,
		name: item.name,
	}))

	const updatePrices = (prices: number[]) => {
		filters.setPrices('priceFrom', prices[0])
		filters.setPrices('priceTo', prices[1])
	}

	console.log(filters.prices.priceFrom, filters.prices.priceTo)

	return (
		<div className='flex flex-col gap-4'>
			<Title text='Filtration' size='md' />

			{/* Top Checkboxes */}
			<div className='border-b border-y-neutral-100 py-4'>
				<CheckboxFiltersGroup
					limit={4}
					items={[
						{ text: 'Thin', value: '1' },
						{ text: 'Thick', value: '2' },
					]}
					title='Dough type'
					name='doughType'
					selected={filters.doughTypes}
					onCheckedChange={filters.setDoughTypes}
				/>
			</div>

			<div className='border-b border-y-neutral-100 py-4'>
				<CheckboxFiltersGroup
					limit={4}
					items={[
						{ text: '20sm', value: '20' },
						{ text: '30sm', value: '30' },
						{ text: '40sm', value: '40' },
					]}
					title='Sizes'
					name='sizes'
					selected={filters.sizes}
					onCheckedChange={filters.setSizes}
				/>
			</div>

			{/* Price Filtration */}
			<div className='border-b border-y-neutral-100 py-4'>
				<Title text='price from and to:' size='sm' />
				<div className='flex gap-6 my-4'>
					<Input
						type='number'
						placeholder='0'
						className='w-24'
						value={String(filters.prices.priceFrom)}
						min={0}
						max={40}
						onChange={e =>
							filters.setPrices('priceFrom', Number(e.target.value))
						}
					/>
					<Input
						type='number'
						placeholder='40'
						className='w-24'
						value={String(filters.prices.priceTo)}
						min={5}
						max={40}
						onChange={e => filters.setPrices('priceTo', Number(e.target.value))}
					/>
				</div>
				<RangeSlider
					min={0}
					max={40}
					step={1}
					value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 40]}
					className='cursor-pointer'
					onValueChange={updatePrices}
				/>
			</div>

			{/* Ingridients */}
			<CheckboxFiltersGroup
				defaulitems={items.slice(0, 6)}
				items={items}
				title='Ingridients'
				limit={6}
				name='ingredients'
				onCheckedChange={filters.setIngredients}
				selected={filters.selectedIngredients}
			/>
		</div>
	)
}
