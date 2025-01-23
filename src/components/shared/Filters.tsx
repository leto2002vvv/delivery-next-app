import React from 'react'
import {
	FilterCheckbox,
	RangeSlider,
	Title,
	CheckboxFiltersGroup,
} from './shared-index'
import { Input } from '../ui/ui-index'

interface FiltersProps {
	className?: string
}

const pizzaIngredients = [
	{ text: 'Tomato Sauce', value: 'i1' },
	{ text: 'Mozzarella Cheese', value: 'i2' },
	{ text: 'Pepperoni', value: '3' },
	{ text: 'Mushrooms', value: '4' },
	{ text: 'Onions', value: '5' },
	{ text: 'Green Peppers', value: '6' },
	{ text: 'Black Olives', value: '7' },
	{ text: 'Sausage', value: '8' },
	{ text: 'Bacon', value: '9' },
	{ text: 'Ham', value: '10' },
	{ text: 'Pineapple', value: '11' },
	{ text: 'Spinach', value: '12' },
	{ text: 'Garlic', value: '13' },
	{ text: 'Basil', value: '14' },
	{ text: 'Oregano', value: '15' },
	{ text: 'Parmesan Cheese', value: '16' },
	{ text: 'Red Peppers', value: '17' },
	{ text: 'Anchovies', value: '18' },
	{ text: 'Artichokes', value: '19' },
	{ text: 'Chicken', value: '20' },
]

export const Filters: React.FC<FiltersProps> = ({ className }) => {
	return (
		<div className='flex flex-col gap-4'>
			<Title text='Filtration' size='md' />

			{/* Top Checkboxes */}
			<div className='flex flex-col gap-4'>
				<FilterCheckbox text='Ready to pick' value='1' />
				<FilterCheckbox text='New ones' value='2' />
			</div>

			{/* Price Filtration */}
			<div className='mt-5 border-y border-y-neutral-100 py-6'>
				<Title text='price from and to:' size='sm' />
				<div className='flex gap-6 my-4'>
					<Input
						type='number'
						placeholder='0'
						className='w-24'
						defaultValue={0}
						min={0}
						max={40}
					/>
					<Input
						type='number'
						placeholder='40'
						className='w-24'
						min={5}
						max={40}
					/>
				</div>
				<RangeSlider min={0} max={40} step={1} className='cursor-pointer' />
			</div>

			{/* Ingridients */}
			<div className='flex flex-col gap-4'>
				<CheckboxFiltersGroup
					title='Ingridients'
					items={pizzaIngredients} 
					limit={6}
				/>
			</div>
		</div>
	)
}
