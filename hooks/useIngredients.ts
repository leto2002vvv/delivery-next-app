import React from 'react'
import { Ingredient } from '@prisma/client'
import { Api } from '../services/api-client'

interface ReturnProps {
	ingredients: Ingredient[]
	isLoading: boolean
	selectedIngredients: Set<string>
	onAddId: (id: string) => void
}

export const useIngredients = () => {
	const [ingredients, setIngredients] = React.useState<Ingredient[]>([])
	const [isLoading, setIsLoading] = React.useState(true)

	React.useEffect(() => {
		async function fetchIngredients() {
			try {
				setIsLoading(true)
				const data = await Api.ingredients.getAll()
				setIngredients(data)
			} catch (error) {
				console.error(error)
			} finally {
				setIsLoading(false)
			}
		}

		fetchIngredients()
	}, [])

	return {
		ingredients,
		isLoading,
	}
}
