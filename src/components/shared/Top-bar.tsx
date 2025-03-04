import React from 'react'
import { Categories, Container, SortPopup } from './shared-index'
import { prisma } from '../../../prisma/prisma-client'
import { Category } from '@prisma/client'

interface TopBarProps {
	categories: Category[]
	className?: string
}

export const TopBar: React.FC<TopBarProps> = ({ categories }) => {
	return (
		<div className='sticky top-0 z-10 bg-white shadow-md shadow-black/5'>
			<Container className='flex items-center justify-between'>
				<Categories categories={categories} />
				<SortPopup />
			</Container>
		</div>
	)
}
