import React from 'react'
import { Checkbox } from '../ui/ui-index'

export interface FilterCheckboxProps {
	className?: string
	text: string
	value: string
	endAdornment?: React.ReactNode
	onCheckedChange?: (checked: boolean) => void
	checked?: boolean
	name?: string
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
	text,
	value,
	checked,
	endAdornment,
	name,
	onCheckedChange,
}) => {
	return (
		<div className='flex items-center gap-2'>
			<Checkbox
				onCheckedChange={onCheckedChange}
				checked={checked}
				value={value}
				id={`checkbox-${String(name)}${String(value)}`}
			/>
			<label
				htmlFor={`checkbox-${String(name)}${String(value)}`}
				className='cursor-pointer'
			>
				{text}
			</label>
			{endAdornment}
		</div>
	)
}
