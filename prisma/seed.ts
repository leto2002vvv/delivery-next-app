import { prisma } from './prisma-client'
import { hashSync } from 'bcrypt'
import { categories, ingredients, products } from './constants'

const randomDecimalNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) * 10 * min * 10) / 10
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
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
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
