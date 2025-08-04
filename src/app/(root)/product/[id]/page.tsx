import React from 'react'
import { notFound } from 'next/navigation'
import { Container } from ' @/components/shared/Container'
import {
	ProductImage,
	Title,
	GroupVariants,
} from ' @/components/shared/shared-index'
import { prisma } from '../../../../../prisma/prisma-client'

export default async function ProductPage({
	params: { id },
}: {
	params: { id: string }
}) {
	const product = await prisma.product.findFirst({
		where: {
			id: Number(id),
		},
		include: {
			productVariations: true,
		},
	})

	console.log(id)

	if (!product) {
		return notFound()
	}

	return (
		<Container className='flex justify-center items-center mt-44'>
			<ProductImage
				imgUrl={product.imageUrl}
				alt={product.name}
				className=''
				size={20}
			/>
			<div className='flex flex-col w-[490px] bg-gray-50 rounded-3xl'>
				<Title text={product.name} size='md' className='pl-6' />
			</div>

			<GroupVariants items={product.productVariations} />
		</Container>
	)
}
