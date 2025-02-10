import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../../prisma/prisma-client'

export async function GET(req: NextRequest) {
	const query = req.nextUrl.searchParams.get('query') || ''

	const products = await prisma.product.findMany({ 
		where: { //same as includes in JS
			name: {
				contains: query,
				mode: 'insensitive', // case-insensitive
			},
		},
		take: 5,
	})

	return NextResponse.json(products)
}
