import React from 'react'
import '@testing-library/jest-dom'
import { getAllByText, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { $Enums } from '@prisma/client'

import { GroupVariants } from '../GroupVariants'
import { cn } from '../../../lib/utils'

describe('GroupVariants Component', () => {
	const items: {
		id: number
		price: number
		size: number | null
		doughType: $Enums.DoughType | null
		productId: number
	}[] = [
		{ id: 1, size: 1, price: 5, doughType: 'THICK', productId: 1 },
		{ id: 2, size: 2, price: 6, doughType: 'THIN', productId: 2 },
		{ id: 3, size: 3, price: 9, doughType: 'THICK', productId: 3 },
	]

	const mockFn = jest.fn()

	beforeEach(() => {
		render(<GroupVariants items={items} onClick={mockFn} selectedValue='1' />)
	})

	test('do all ProductValiants get rendered', () => {
		expect(screen.findAllByText('1 sm')).toBeInTheDocument
		expect(screen.findAllByText('2 sm')).toBeInTheDocument
		expect(screen.findAllByText('3 sm')).toBeInTheDocument
	})

	test('the button calls fthe function OnClick', async () => {
		const button = await screen.findAllByRole('button')

		await userEvent.click(button[0])

		expect(mockFn).toHaveBeenCalled()
	})

	test('active classes appear after button receives the appropriate selectedValue', async () => {
		const { rerender } = render(
			<GroupVariants items={items} onClick={mockFn} selectedValue='1' />
		)

		let button1 = screen.getAllByText('1 sm')[0]

		expect(button1).toHaveClass('bg-white shadow')

		rerender(<GroupVariants items={items} onClick={mockFn} selectedValue='2' />)

		button1 = screen.getAllByText('1 sm')[1]

		expect(button1).toHaveClass('bg-gray-300 opacity-30 pointer-events-none')
	})

	test('does clicking button return the right value', async () => {
		const button = screen.getAllByText('1 sm')

		await userEvent.click(button[0])

		expect(mockFn).toHaveBeenCalledWith('THICK')
	})

})
