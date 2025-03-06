import {
	Container,
	Title,
	TopBar,
	Filters,
	ProductsList,
} from ' @/components/shared/shared-index'
import { prisma } from '../../prisma/prisma-client'

export default async function Home() {
	const categories = await prisma.category.findMany({
		include: {
			products: {
				include: {
					productVariations: true,
					ingredients: true,
				},
			},
		},
	})

	console.log(categories)

	return (
		<>
			<Container>
				<Title text='All pizzas' size='lg' className='font-extrabold mt-4' />
			</Container>

			<TopBar
				categories={categories.filter(category => category.products.length > 0)}
			/>

			<Container className='mt-8'>
				<div className='flex gap-16'>
					<div className='w-[250px]'>
						<Filters />
					</div>
					<div>
						{categories.map(
							category =>
								category.products.length > 0 && (
									<ProductsList
										title={category.name}
										categoryId={category.id}
										items={category.products}
										key={category.id}
									/>
								)
						)}
					</div>
				</div>
			</Container>
		</>
	)
}
