import { CartDTO } from './dto/cart.dto'
import { axiosInstance } from './instance'

export const fetchCart = async (): Promise<CartDTO> => {
	const { data } = await axiosInstance.get<CartDTO>('/cart')

	return data
}
