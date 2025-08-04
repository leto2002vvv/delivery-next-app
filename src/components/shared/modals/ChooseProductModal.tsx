'use client'

import { DialogContent, Dialog } from ' @/components/ui/dialog'
import { cn } from ' @/lib/utils'
import React from 'react'
import { Ingredient, Product, ProductVariation } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { ChoosePizzaForm, ChooseProductForm } from '../shared-index'

type FullProduct = Product & {
	ingredients: Ingredient[]
	productVariations: ProductVariation[]
}

interface ChooseProductModalProps {
	className?: string
	product: FullProduct
}

export function ChooseProductModal({
	className,
	product,
}: ChooseProductModalProps) {
	const router = useRouter()
	const isItemPizza = product.productVariations[0].doughType ? true : false

	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent
				className={cn(
					'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white owerflow-hidden',
					className
				)}
			>
				{isItemPizza ? (
					<ChoosePizzaForm
						imgUrl={product.imageUrl}
						name={product.name}
						ingredients={product.ingredients}
						productVariations={product.productVariations}
						onClickAddCart={undefined}
					/>
				) : (
					<ChooseProductForm
						imgUrl={product.imageUrl}
						name={product.name}
						ingredients={product.ingredients}
						productVariations={product.productVariations}
						onClickAddCart={undefined}
					/>
				)}
			</DialogContent>
		</Dialog>
	)
}
