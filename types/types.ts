import { Ingredient, Product, ProductVariation } from '@prisma/client'

export type ProductWithRelations = Product & {
	items: ProductVariation[]
	ingredients: Ingredient[]
}

export interface ChooseProductProps {
	className?: string
	imgUrl: string
	name: string
	ingredients: Ingredient[]
	items?: ProductWithRelations['items']
	productVariations: ProductVariation[]
	onClickAddCart?: VoidFunction
}
