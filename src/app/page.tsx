import { Container, Title, TopBar } from ' @/components/shared/shared-index'

export default function Home() {
	return (
		<>
			<Container>
				<Title text='All pizzas' size='lg' className='font-extrabold mt-4' />
			</Container>
			<TopBar />
			<Container>
				<div className='flex mr-[60px]'>
					
				</div>
			</Container>
		</>
	)
}
