import { DoughType, Ingredient, ProductVariation } from '@prisma/client'
import { PizzaSize } from '../../constants/pizza'

/**
 * Function for calculating the total cost of a pizza
 *
 * @param size - size of chosen pizza
 * @param doughType - dough type of chosen pizza
 * @param productVariations - list of pizza-variations
 * @param ingredients - ingredients list
 * @param selectedIngredients - selected ingredients
 *
 * @returns number (total price)
 */

export const CalcTotalPizzaPrice = (
	size: PizzaSize,
	doughType: DoughType,
	productVariations: ProductVariation[],
	ingredients: Ingredient[],
	selectedIngredients: Set<number>
) => {
	const pizzaPrice = productVariations.find(
		item => item.doughType === doughType && item.size === size
	)?.price

	console.log(pizzaPrice)

	const totalIngredientsPrice = ingredients
		.filter(i => selectedIngredients.has(i.id))
		.reduce((acc, i) => {
			return acc + i.price
		}, 0)

	return (pizzaPrice ?? 0) + totalIngredientsPrice
}
