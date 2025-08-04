export const mapPizzaSize = {
	20: 'Little',
	30: 'Medium',
	40: 'Large',
} as const

export const mapDoughType = {
	THIN: 'THIN',
	THICK: 'THICK',
} as const

export const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) => ({
	name,
	value,
}))

export const doughTypes = Object.entries(mapDoughType).map(([value, name]) => ({
	name,
	value,
}))

export type PizzaSize = keyof typeof mapPizzaSize
export type PizzaType = keyof typeof mapDoughType
