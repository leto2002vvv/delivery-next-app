import React from 'react'
import { notFound } from 'next/navigation'
import { ChooseProductModal } from ' @/components/shared/shared-index'
import { prisma } from '../../../../../../prisma/prisma-client'
import { Ingredient, Product, ProductVariation } from '@prisma/client'

type FullProduct = Product & {
	ingredients: Ingredient[]
	productVariations: ProductVariation[]
}

export default async function ProductModalPage({
	params: { id },
}: {
	params: { id: string }
}) {
	const product = (await prisma.product.findFirst({
		where: {
			id: Number(id),
		},
		include: {
			productVariations: true,
			ingredients: true,
		},
	})) as FullProduct | null

	if (!product) {
		return notFound()
	}

	return <ChooseProductModal product={product} />
}
