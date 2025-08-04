import { render, screen } from '@testing-library/react'
import { ChooseProductForm } from '../ChooseProductForm'

describe('ChooseProductForm', () => {
	it('renders an image', () => {
		render(
			<ChooseProductForm
				imgUrl='./photo-1'
				name={''}
				ingredients={[]}
				productVariations={[]}
			/>
		)
		expect(screen.getByRole('img')).toBeInTheDocument()
	})
})
