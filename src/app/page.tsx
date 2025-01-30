import {
	Container,
	Title,
	TopBar,
	Filters,
	ProductsList,
} from ' @/components/shared/shared-index'

export default function Home() {
	return (
		<>
			<Container>
				<Title text='All pizzas' size='lg' className='font-extrabold mt-4' />
			</Container>

			<TopBar />

			<Container className='mt-8'>
				<div className='flex gap-16'>
					<div className='w-[250px]'>
						<Filters />
					</div>
					<div>
						<ProductsList
							title={'Pizzas'}
							items={[
								{
									id: 1,
									name: 'Pizza 1',
									imgUrl:
										'https://media.dodostatic.com/image/r:292x292/11ef0286349b277780cb97a8544a6aec.avif',
									items: [{ price: 100 }],
								},
								{
									id: 2,
									name: 'Pizza 1',
									imgUrl:
										'https://media.dodostatic.com/image/r:292x292/11ef0286349b277780cb97a8544a6aec.avif',
									items: [{ price: 100 }],
								},
								{
									id: 3,
									name: 'Pizza 1',
									imgUrl:
										'https://media.dodostatic.com/image/r:292x292/11ef0286349b277780cb97a8544a6aec.avif',
									items: [{ price: 100 }],
								},
								{
									id: 4,
									name: 'Pizza 1',
									imgUrl:
										'https://media.dodostatic.com/image/r:292x292/11ef0286349b277780cb97a8544a6aec.avif',
									items: [{ price: 100 }],
								},
								{
									id: 5,
									name: 'Pizza 1',
									imgUrl:
										'https://media.dodostatic.com/image/r:292x292/11ef0286349b277780cb97a8544a6aec.avif',
									items: [{ price: 100 }],
								},
								{
									id: 6,
									name: 'Pizza 1',
									imgUrl:
										'https://media.dodostatic.com/image/r:292x292/11ef0286349b277780cb97a8544a6aec.avif',
									items: [{ price: 100 }],
								},
								{
									id: 7,
									name: 'Pizza 1',
									imgUrl:
										'https://media.dodostatic.com/image/r:292x292/11ef0286349b277780cb97a8544a6aec.avif',
									items: [{ price: 100 }],
								},
								{
									id: 8,
									name: 'Pizza 1',
									imgUrl:
										'https://media.dodostatic.com/image/r:292x292/11ef0286349b277780cb97a8544a6aec.avif',
									items: [{ price: 100 }],
								},
								{
									id: 9,
									name: 'Pizza 1',
									imgUrl:
										'https://media.dodostatic.com/image/r:292x292/11ef0286349b277780cb97a8544a6aec.avif',
									items: [{ price: 100 }],
								},
								{
									id: 10,
									name: 'Pizza 1',
									imgUrl:
										'https://media.dodostatic.com/image/r:292x292/11ef0286349b277780cb97a8544a6aec.avif',
									items: [{ price: 100 }],
								},
								{
									id: 11,
									name: 'Pizza 1',
									imgUrl:
										'https://media.dodostatic.com/image/r:292x292/11ef0286349b277780cb97a8544a6aec.avif',
									items: [{ price: 100 }],
								},
							]}
							categoryId={1}
						/>
						<ProductsList
							title={'Combo'}
							items={[
								{
									id: 1,
									name: 'Pizza 1',
									imgUrl:
										'https://media.dodostatic.com/image/r:292x292/11ef0286349b277780cb97a8544a6aec.avif',
									items: [{ price: 100 }],
								},
								{
									id: 2,
									name: 'Pizza 1',
									imgUrl:
										'https://media.dodostatic.com/image/r:292x292/11ef0286349b277780cb97a8544a6aec.avif',
									items: [{ price: 100 }],
								},
								{
									id: 3,
									name: 'Pizza 1',
									imgUrl:
										'https://media.dodostatic.com/image/r:292x292/11ef0286349b277780cb97a8544a6aec.avif',
									items: [{ price: 100 }],
								},
								{
									id: 4,
									name: 'Pizza 1',
									imgUrl:
										'https://media.dodostatic.com/image/r:292x292/11ef0286349b277780cb97a8544a6aec.avif',
									items: [{ price: 100 }],
								},
								{
									id: 5,
									name: 'Pizza 1',
									imgUrl:
										'https://media.dodostatic.com/image/r:292x292/11ef0286349b277780cb97a8544a6aec.avif',
									items: [{ price: 100 }],
								},
								{
									id: 6,
									name: 'Pizza 1',
									imgUrl:
										'https://media.dodostatic.com/image/r:292x292/11ef0286349b277780cb97a8544a6aec.avif',
									items: [{ price: 100 }],
								},
								{
									id: 7,
									name: 'Pizza 1',
									imgUrl:
										'https://media.dodostatic.com/image/r:292x292/11ef0286349b277780cb97a8544a6aec.avif',
									items: [{ price: 100 }],
								},
								{
									id: 8,
									name: 'Pizza 1',
									imgUrl:
										'https://media.dodostatic.com/image/r:292x292/11ef0286349b277780cb97a8544a6aec.avif',
									items: [{ price: 100 }],
								},
								{
									id: 9,
									name: 'Pizza 1',
									imgUrl:
										'https://media.dodostatic.com/image/r:292x292/11ef0286349b277780cb97a8544a6aec.avif',
									items: [{ price: 100 }],
								},
								{
									id: 10,
									name: 'Pizza 1',
									imgUrl:
										'https://media.dodostatic.com/image/r:292x292/11ef0286349b277780cb97a8544a6aec.avif',
									items: [{ price: 100 }],
								},
								{
									id: 11,
									name: 'Pizza 1',
									imgUrl:
										'https://media.dodostatic.com/image/r:292x292/11ef0286349b277780cb97a8544a6aec.avif',
									items: [{ price: 100 }],
								},
							]}
							categoryId={2}
						/>
					</div>
				</div>
			</Container>
		</>
	)
}
