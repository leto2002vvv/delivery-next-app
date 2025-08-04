import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../prisma/prisma-client'

export async function GET(req: NextRequest) {
	const token = req.cookies.get('cartToken')?.value

	if (!token) {
		return NextResponse.json({ totalAmount: 0, items: [] })
	}

	const userCart = await prisma.cart.findFirst({
		where: {
			OR: [
				{
					token,
				},
			],
		},
		include: {
			cartItems: {
				orderBy: {
					createdAt: 'desc',
				},
				include: {
					ProductVariation: {
						include: {
							product: true,
						},
					},
					ingredients: true,
				},
			},
		},
	})

	return NextResponse.json(userCart)
}
