import { Ingredient } from '@prisma/client'
import { mapDoughType, PizzaSize, PizzaType } from '../../constants/pizza'

export const getCartItemDetails = (
	pizzaType: PizzaType,
	pizzaSize: PizzaSize,
	ingredients: Ingredient[]
) => {
	const details = []

	if (pizzaType && pizzaType) {
		const typeName = mapDoughType[pizzaType]
		details.push(`${typeName}, ${pizzaSize} sm`)
	}

	if (ingredients) {
		details.push(...ingredients.map(ingredient => ingredient.name))
	}

	return details.toString()
}
