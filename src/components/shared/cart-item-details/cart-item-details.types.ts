import { Ingredient } from '@prisma/client'

export interface CartItemProps {
	id: number
	imageUrl: string
	details: string
	ingredients?: Ingredient[]
	name: string
	price: number
	quantity: number
	disabled?: boolean
}
