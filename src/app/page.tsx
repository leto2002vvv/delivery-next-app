import {
	Container,
	Title,
	TopBar,
	Filters,
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
					<div className="">
						ProductList
					</div>
				</div>
			</Container>
		</>
	)
}
