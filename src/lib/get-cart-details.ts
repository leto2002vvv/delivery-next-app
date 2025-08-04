import { CartDTO } from '../../services/dto/cart.dto'
import { ICartStateItem } from '../../store/cart'

interface ReturnProps {
	cartItems: ICartStateItem[]
	totalAmount: number
}

export const getCartDetails = (data: CartDTO): ReturnProps => {
	const items = data.items.map(item => ({
		id: item.id,
		quantity: item.quantity,
		name: item.name,
		imageUrl: item.imageUrl,
		price: item.price,
		pizzaSize: item.pizzaSize,
		doughType: item.doughType,
	}))
}
