import { prisma } from './prisma-client'
import { hashSync } from 'bcrypt'
import { categories, ingredients, products } from './constants'
import { Prisma } from '.prisma/client'

type ProductVariation = {
	productId: number
	doughType?: 'THICK' | 'THIN' // wouldn't it be better to use an enum here?
	size?: 20 | 30 | 40 // wouldn't it be better to use an enum here?
}

const randomNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) * 10 * min * 10) / 10
}

const generateProductVariation = ({
	productId,
	doughType,
	size,
}: ProductVariation) => {
	return {
		productId,
		price: randomNumber(1, 5),
		doughType,
		size,
	} as Prisma.ProductVariationUncheckedCreateInput
}

async function up() {
	await prisma.user.createMany({
		data: [
			{
				fullName: 'John',
				email: 'user@test.com',
				password: hashSync('password', 10),
				verified: new Date(),
				role: 'USER',
			},
			{
				fullName: 'Jane Doe',
				email: 'jane@test.com',
				password: hashSync('password', 10),
				verified: new Date(),
				role: 'ADMIN',
			},
		],
	})
	await prisma.category.createMany({
		data: categories,
	})
	await prisma.ingredient.createMany({
		data: ingredients,
	})
	await prisma.product.createMany({
		data: products,
	})
	const pizza1 = await prisma.product.create({
		data: {
			name: 'Dodo Pizza',
			imageUrl: '/pizza-imgs/dodo-pizza.avif',
			categoryId: 1,
			ingredients: {
				connect: ingredients.slice(0, 3),
			},
		},
	})
	const pizza2 = await prisma.product.create({
		data: {
			name: 'Mexican',
			imageUrl: '/pizza-imgs/pizza-mexican.avif',
			categoryId: 1,
			ingredients: {
				connect: ingredients.slice(5, 12),
			},
		},
	})
	const pizza3 = await prisma.product.create({
		data: {
			name: 'Pizza Cheeseburger',
			imageUrl: '/pizza-imgs/pizza-cheeseburger.avif',
			categoryId: 1,
			ingredients: {
				connect: ingredients.slice(3, 10),
			},
		},
	})
	await prisma.productVariation.createMany({
		data: [
			// dodo pizza
			generateProductVariation({
				productId: pizza1.id,
				doughType: 'THICK',
				size: 30,
			}),
			generateProductVariation({
				productId: pizza1.id,
				doughType: 'THICK',
				size: 40,
			}),
			generateProductVariation({
				productId: pizza1.id,
				doughType: 'THIN',
				size: 20,
			}),
			// mexican
			generateProductVariation({
				productId: pizza2.id,
				doughType: 'THICK',
				size: 40,
			}),
			generateProductVariation({
				productId: pizza2.id,
				doughType: 'THICK',
				size: 40,
			}),
			generateProductVariation({
				productId: pizza3.id,
				doughType: 'THIN',
				size: 20,
			}),
			generateProductVariation({
				productId: pizza3.id,
				doughType: 'THIN',
				size: 40,
			}),
			// pizza cheeseburger
			generateProductVariation({
				productId: pizza3.id,
				doughType: 'THICK',
				size: 30,
			}),
			generateProductVariation({
				productId: pizza3.id,
				doughType: 'THICK',
				size: 40,
			}),
			generateProductVariation({
				productId: pizza3.id,
				doughType: 'THIN',
				size: 20,
			}),
			generateProductVariation({
				productId: pizza3.id,
				doughType: 'THIN',
				size: 30,
			}),
			generateProductVariation({ productId: 1 }),
			generateProductVariation({ productId: 2 }),
			generateProductVariation({ productId: 3 }),
			generateProductVariation({ productId: 4 }),
			generateProductVariation({ productId: 5 }),
			generateProductVariation({ productId: 6 }),
			generateProductVariation({ productId: 7 }),
			generateProductVariation({ productId: 8 }),
			generateProductVariation({ productId: 9 }),
			generateProductVariation({ productId: 10 }),
			generateProductVariation({ productId: 11 }),
			generateProductVariation({ productId: 12 }),
			generateProductVariation({ productId: 13 }),
			generateProductVariation({ productId: 14 }),
			generateProductVariation({ productId: 15 }),
			generateProductVariation({ productId: 16 }),
			generateProductVariation({ productId: 17 }),
		],
	})
	await prisma.cart.createMany({
		data: [
			{
				userId: 1,
				totalAmount: 0,
				token: 'token',
			},
			{
				userId: 2,
				totalAmount: 10,
				token: 'twoken',
			},
		],
	})
	await prisma.cartItem.create({
		data: {
			productVariationId: 1,
			cartId: 1,
			quantity: 2,
			ingredients: {
				connect: ingredients.slice(0, 3),
			},
		},
	})
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "ProductVariation" RESTART IDENTITY CASCADE`
}

async function main() {
	try {
		await down()
		await up()
	} catch (error) {
		console.error(error)
	}
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async error => {
		console.error(error)
		await prisma.$disconnect()
		process.exit(1)
	})
