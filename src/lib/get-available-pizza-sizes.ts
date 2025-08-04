import { ProductVariation } from '@prisma/client'
import { pizzaSizes, PizzaType } from '../../constants/pizza'
import { Variant } from ' @/components/shared/GroupVariants'

export const getAvailablePizzaSizes = (
	productVariations: ProductVariation[],
	doughType: PizzaType
): Variant[] => {
	const filteredPizzasByType = productVariations.filter(
		item => item.doughType === doughType
	)
	return pizzaSizes.map(item => ({
		name: item.name,
		value: item.value,
		disabled: !filteredPizzasByType.some(
			pizza => pizza.size === Number(item.value)
		),
	}))
}
