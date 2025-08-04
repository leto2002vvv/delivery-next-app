'use client'

import { cn } from ' @/lib/utils'
import React from 'react'

interface CartDrawerProps {
	className?: string
}

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetFooter,
} from '../ui/sheet'
import Link from 'next/link'
import { Button } from '../ui/ui-index'
import { ArrowRight } from 'lucide-react'
import CartDrawerItem from './CartDrawerItem'
import { getCartItemDetails } from ' @/lib'

export const CartDrawer: React.FC<React.PropsWithChildren<CartDrawerProps>> = ({
	className,
	children,
	// items,
}) => {
	return (
		<div className={cn('', className)}>
			<Sheet>
				<SheetTrigger asChild>{children}</SheetTrigger>
				<SheetContent
					side={'right'}
					className='flex flex-col justify-between pb-0 bg-neutral-100'
				>
					<SheetHeader>
						<SheetTitle>
							items in the cart: <span className=''>1</span>
						</SheetTitle>
					</SheetHeader>

					<div className='-mx-6 mt-5 overflow-auto flex-1'>
						<CartDrawerItem
							id={0}
							imageUrl={''}
							details={getCartItemDetails('THICK', 30, [
								{
									name: 'Cheese crust',
									id: 1,
									price: 3.5,
									imageUrl:
										'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
								},
								{
									name: 'Creamy mozzarella',
									id: 2,
									price: 1.5,
									imageUrl:
										'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
								},
								{
									name: 'Cheddar and parmesan cheeses',
									id: 3,
									price: 1.5,
									imageUrl:
										'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
								},
								{
									name: 'Spicy jalapeno pepper',
									id: 4,
									price: 1.1,
									imageUrl:
										'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
								},
							])}
							name={'Dodo pizza'}
							price={30}
							quantity={3}
							ingredients={[]}
						/>
						<CartDrawerItem
							id={0}
							imageUrl={''}
							details={getCartItemDetails('THICK', 30, [
								{
									name: 'Cheese crust',
									id: 1,
									price: 3.5,
									imageUrl:
										'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
								},
								{
									name: 'Creamy mozzarella',
									id: 2,
									price: 1.5,
									imageUrl:
										'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
								},
								{
									name: 'Cheddar and parmesan cheeses',
									id: 3,
									price: 1.5,
									imageUrl:
										'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
								},
								{
									name: 'Spicy jalapeno pepper',
									id: 4,
									price: 1.1,
									imageUrl:
										'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
								},
							])}
							name={'Dodo pizza'}
							price={30}
							quantity={3}
							ingredients={[]}
						/>
						<CartDrawerItem
							id={0}
							imageUrl={''}
							details={getCartItemDetails('THICK', 30, [
								{
									name: 'Cheese crust',
									id: 1,
									price: 3.5,
									imageUrl:
										'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
								},
								{
									name: 'Creamy mozzarella',
									id: 2,
									price: 1.5,
									imageUrl:
										'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
								},
								{
									name: 'Cheddar and parmesan cheeses',
									id: 3,
									price: 1.5,
									imageUrl:
										'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
								},
								{
									name: 'Spicy jalapeno pepper',
									id: 4,
									price: 1.1,
									imageUrl:
										'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
								},
							])}
							name={'Dodo pizza'}
							price={30}
							quantity={3}
							ingredients={[]}
						/>
						<CartDrawerItem
							id={0}
							imageUrl={''}
							details={getCartItemDetails('THICK', 30, [
								{
									name: 'Cheese crust',
									id: 1,
									price: 3.5,
									imageUrl:
										'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
								},
								{
									name: 'Creamy mozzarella',
									id: 2,
									price: 1.5,
									imageUrl:
										'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
								},
								{
									name: 'Cheddar and parmesan cheeses',
									id: 3,
									price: 1.5,
									imageUrl:
										'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
								},
								{
									name: 'Spicy jalapeno pepper',
									id: 4,
									price: 1.1,
									imageUrl:
										'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
								},
							])}
							name={'Dodo pizza'}
							price={30}
							quantity={3}
							ingredients={[]}
						/>
						<CartDrawerItem
							id={0}
							imageUrl={''}
							details={getCartItemDetails('THICK', 30, [
								{
									name: 'Cheese crust',
									id: 1,
									price: 3.5,
									imageUrl:
										'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
								},
								{
									name: 'Creamy mozzarella',
									id: 2,
									price: 1.5,
									imageUrl:
										'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
								},
								{
									name: 'Cheddar and parmesan cheeses',
									id: 3,
									price: 1.5,
									imageUrl:
										'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
								},
								{
									name: 'Spicy jalapeno pepper',
									id: 4,
									price: 1.1,
									imageUrl:
										'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
								},
							])}
							name={'Dodo pizza'}
							price={30}
							quantity={3}
							ingredients={[]}
						/>
						<CartDrawerItem
							id={0}
							imageUrl={''}
							details={getCartItemDetails('THICK', 30, [
								{
									name: 'Cheese crust',
									id: 1,
									price: 3.5,
									imageUrl:
										'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
								},
								{
									name: 'Creamy mozzarella',
									id: 2,
									price: 1.5,
									imageUrl:
										'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
								},
								{
									name: 'Cheddar and parmesan cheeses',
									id: 3,
									price: 1.5,
									imageUrl:
										'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
								},
								{
									name: 'Spicy jalapeno pepper',
									id: 4,
									price: 1.1,
									imageUrl:
										'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
								},
							])}
							name={'Dodo pizza'}
							price={30}
							quantity={3}
							ingredients={[]}
						/>
					</div>

					<SheetFooter className='-mx-6 bg-white p-8'>
						<div className='w-full'>
							<div className='flex mb-4'>
								<span className='flex flex-1 text-lg text-neutral-500'>
									Total
									<div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2'></div>
								</span>
								<span className='font-bold text-lg'>50 €</span>
							</div>
							<Link href={'/cart'}>
								<Button type='submit' className='w-full h-12 text-base'>
									To purchase
									<ArrowRight />
								</Button>
							</Link>
						</div>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</div>
	)
}
