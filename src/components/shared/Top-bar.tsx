import React from 'react'
import { Categories, Container, SortPopup } from './shared-index'

interface TopBarProps {
	className?: string
}

export const TopBar: React.FC<TopBarProps> = ({ className }) => {
	return (
		<div className='sticky top-0 z-10 bg-white shadow-md shadow-black/5'>
			<Container className='flex items-center justify-between'>
				<Categories />
				<SortPopup />
			</Container>
		</div>
	)
}
