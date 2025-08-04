import React from 'react'
import '@testing-library/jest-dom'
import {
	findByText,
	getAllByText,
	render,
	screen,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Categories } from '../Categories'
import { useCategoryStore } from '../../../../store/category'

describe('Categories Component', () => {
	const items = [
		{ name: '1', id: 2 },
		{ name: '2', id: 1 },
	]

	const getId = jest.fn()

	beforeEach(() => {
		render(<Categories categories={items} />)
		useCategoryStore.setState({ activeId: 0  })
	})

	test('do all item category props get rendered after page rendering', () => {
		const category1 = screen.getAllByText('1')

		expect(category1).toHaveLength(1)
	})

	test('does clicked button get an active state', async () => {
		const button1 = screen.getByText('1')

		await userEvent.click(button1)

		expect(button1).toHaveClass('bg-white')
	})

	test('clicking a different buttons changes its styles', async () => {
		const btn1 = screen.getByText('1')
		const btn2 = screen.getByText('2')

		await userEvent.click(btn1)

		expect(btn1).toHaveClass('bg-white', { exact: false })
		expect(btn2).not.toHaveClass('bg-white', { exact: false })

		await userEvent.click(btn2)

		expect(btn1).not.toHaveClass('bg-white', { exact: false })
		expect(btn2).toHaveClass('bg-white', { exact: false })
	})

	test('activeId sets up the correct classes for an selected item after render', () => {
		useCategoryStore.setState({ activeId: 1 })

		render(<Categories categories={items} />)

		const btn1 = screen.getAllByRole('button', { name: '1' })[0]
		const btn2 = screen.getAllByRole('button', { name: '2' })[0]

		expect(btn1).toHaveClass('bg-white', { exact: false })
		expect(btn2).not.toHaveClass('bg-white', { exact: false })
	})
})
