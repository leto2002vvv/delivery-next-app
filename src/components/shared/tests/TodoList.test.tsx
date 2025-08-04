import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import TodoList from '../TodoList'

describe('TodoList Component', () => {
	beforeEach(() => {
		render(<TodoList />)
	})

	test('is input empt after rendering', async () => {
		const input = screen.getByRole('textbox')

		expect(input).toHaveValue('')
	})

	test('can a new todo be added to list', async () => {
		const addButton = screen.getByRole('button', { name: /add todo/i })
		const input = screen.getByRole('textbox')

		await userEvent.type(input, 'to do a homework')
		await userEvent.click(addButton)
	})

	test('does input-value get deleted after clicking an addButton', async () => {
		const addButton = screen.getByRole('button', { name: /add todo/i })

		await userEvent.click(addButton)
		expect(addButton).toHaveValue('')

	})

	test('does chosen todo get deleted by clicking the deleteButton', async () => {
		const addButton = screen.getByRole('button', { name: /add todo/i })
		const input = screen.getByRole('textbox')

		await userEvent.type(input, 'to do a homework')
		await userEvent.click(addButton)

		const deleteButton = screen.getAllByRole('button', { name: /delete/i })[0]

		await userEvent.click(deleteButton)
		expect(screen.queryByText('to do a homework')).not.toBeInTheDocument()
	})

	test('can an empty-value not be added to the todo list', async () => {
		const addButton = screen.getByRole('button', { name: /add todo/i })
		const input = screen.getByRole('textbox')

		expect(input).toHaveValue('')

		const itemsBeforeAdding = screen.queryAllByRole('textbox').length

		await userEvent.click(addButton)

		const itemsAfterAdding = screen.queryAllByRole('textbox').length

		expect(itemsBeforeAdding).toBe(itemsAfterAdding)
	})

	test('can more than one todo item be added', async () => {
		const addButton = screen.getByRole('button', { name: /add todo/i })
		const input = screen.getByRole('textbox')

		await userEvent.type(input, 'do homework')
		await userEvent.click(addButton)

		expect(screen.getByText('do homework')).toBeInTheDocument()

		await userEvent.type(input, 'do the dishes')
		await userEvent.click(addButton)

		expect(screen.getByText('do the dishes')).toBeInTheDocument()

		const allListItems = screen.getAllByRole('listitem')

		expect(allListItems).toHaveLength(2)
	})
})
