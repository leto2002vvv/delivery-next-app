import { create } from 'zustand'
import { Api } from '../services/api-client'
import { getCartDetails } from ' @/lib/index'

export interface ICartStateItem {
	id: number
	quantity: number
	name: string
	imageUrl: string
	price: number
	pizzaSize?: number | null
	doughType?: number | null
	ingredients: Array<{ name: string; price: number }>
}

export interface CartState {
	loading: boolean
	error: boolean
	totalAmount: number
	items: ICartStateItem[]
	fetchCartItems: () => Promise<void>
	updateItemQuantity: (id: number, quantity: number) => Promise<void>
	addCartItem: (values: any) => Promise<void>
	removeCartItem: (id: number) => Promise<void>
}

export const useCartStore = create<CartState>((set, get) => ({
	items: [],
	error: false,
	loading: true,
	totalAmount: 0,

	fetchCartItems: async () => {
		try {
			set({ loading: true, error: false })
			const data = await Api.cart.fetchCart()
			set(getCartDetails(data))
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},

	updateItemQuantity(id, quantity) {},

	addCartItem(values) {},

	removeCartItem(id) {},
}))
