import { cn } from ' @/lib/utils'
import React from 'react'
import { Title } from './shared-index'
import { Button } from '../ui/button'
import { ChooseProductProps } from '../../../types/types'

export const ChooseProductForm: React.FC<ChooseProductProps> = ({
	items,
	ingredients,
	name,
	className,
	imgUrl,
	productVariations,
	onClickAdd,
}) => {
	return (
		<div className={cn('flex flex-1 m-10', className)}>
			<div
				className={'flex items-center justify-center flex-1 relative w-full'}
			>
				<img src={imgUrl} className='w-1/2' />
			</div>

			<div className='w-[490px] flex flex-col gap-5 py-10 bg-slate-50/50 rounded-md'>
				<Title text={name} size='lg' className='' />

				<p>{ingredients.map(i => i.name).join(', ')}</p>

				<Button className='h-[55px] px-10 text-base rounded-[18px] w-1/2'>
					buy for {productVariations[0].price} $
				</Button>
			</div>
		</div>
	)
}
