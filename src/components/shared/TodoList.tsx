import React, { useEffect, useState } from 'react'

type Product = {
	id: number
	title: string
	price: number
	description: string
	category: string
	image: string
	rating: {
		rate: number
		count: number
	}
}

const Products: React.FC = () => {
	const [products, setProducts] = useState<Product[]>()

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const req = await fetch('https://fakestoreapi.com/products')
				const data = await req.json()
				setProducts(data)
			} catch (error) {
				console.error(error)
			} finally {
			}
		}

		fetchProducts()
	}, [])

	return (
		<ul>
			{products?.map(i => (
				<li key={i.id}>
					{i.title}
					
				</li>
			))}
		</ul>
	)
}

export default Products
