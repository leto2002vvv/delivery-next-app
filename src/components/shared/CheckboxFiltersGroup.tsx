'use client'

import React from 'react'
import { FilterCheckbox, FilterCheckboxProps } from './FilterCheckbox'
import { Title } from './shared-index'
import { Button, Input, Skeleton } from '../ui/ui-index'

type Item = FilterCheckboxProps

interface CheckboxFiltersGroupProps {
	className?: string
	title: string
	items: Item[] // for all existed items
	defaulitems?: Item[] // for items that are displayed by default (for unopened list of toppings)
	limit: number
	name: string
	searchInputPlaceholder?: string
	selected?: Set<string>
	onCheckedChange?: (id: string) => void //chosen checkboxes
}

export const CheckboxFiltersGroup: React.FC<CheckboxFiltersGroupProps> = ({
	defaulitems,
	title,
	name,
	items,
	limit,
	searchInputPlaceholder = 'Search...',
	selected,
	onCheckedChange,
}) => {
	const [showAll, setShowAll] = React.useState(false)
	const [inputValue, setinputValue] = React.useState('')

	const handleinputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setinputValue(e.target.value)
	}

	if (items.length === 0) {
		return (
			<>
				<Title text={title} />
				{...Array(limit)
					.fill(0)
					.map((_, i) => <Skeleton key={i} className='h-6 rounded-[8px]' />)}
				<Skeleton className='h-10 px-4' />
			</>
		)
	}

	const list = showAll
		? items.filter(item =>
				item.text.toLowerCase().includes(inputValue.toLowerCase())
		  )
		: (defaulitems || items).slice(0, limit)

	return (
		<>
			<Title text={title} size='sm' className='mb-2' />

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
						name={name}
						endAdornment={item.endAdornment}
						checked={selected?.has(item.value)}
						onCheckedChange={() => onCheckedChange?.(item.value)}
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
