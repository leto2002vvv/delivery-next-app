'use client'

import React from 'react'
import { FilterCheckbox, FilterCheckboxProps } from './FilterCheckbox'
import { Title } from './shared-index'
import { Button, Input } from '../ui/ui-index'

type Item = FilterCheckboxProps

interface CheckboxFiltersGroupProps {
	className?: string
	title: string
	items: Item[] // for all existed items
	defaulitems?: Item[] // for items that are displayed by default (for unopened list of toppings)
	limit: number
	searchInputPlaceholder?: string
	onChange?: (items: Item[]) => void //chosen checkboxes
}

export const CheckboxFiltersGroup: React.FC<CheckboxFiltersGroupProps> = ({
	className,
	title,
	items,
	limit,
	searchInputPlaceholder = 'Search...',
	onChange,
}) => {
	const [showAll, setShowAll] = React.useState(false)
	const [inputValue, setinputValue] = React.useState('')

	const handleinputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setinputValue(e.target.value)
	}

	const list = showAll
		? items.filter(item =>
				item.text.toLowerCase().includes(inputValue.toLowerCase())
		  )
		: items.slice(0, limit)

	return (
		<>
			<Title text={title} size='sm' />

			{showAll && (
				<Input
					placeholder={searchInputPlaceholder}
					value={inputValue}
					onChange={handleinputChange}
				/>
			)}

			<div className='flex flex-col gap-3 max-h-96 pr-2 overflow-auto'>
				{list.map(item => (
					<FilterCheckbox
						key={item.value}
						value={item.value}
						text={item.text}
						endAdornment={item.endAdornment}
						checked={item.checked}
						onCheckedChange={ids => console.log(ids)}
					/>
				))}
			</div>

			{items.length > limit && (
				<div className='flex justify-center border-b border-b-neutral-100 pb-4'>
					<Button
						className='bg-transparent border text-black w-full'
						onClick={() => setShowAll(!showAll)}
					>
						{showAll ? 'close' : 'show all'}
					</Button>
				</div>
			)}
		</>
	)
}
