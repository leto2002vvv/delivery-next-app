import React from 'react'
import { Filters } from './useFilters'
import QueryString from 'qs'
import { useRouter } from 'next/navigation'

export const useQueryFilters = (filters: Filters) => {
	const router = useRouter()

	React.useEffect(() => {
		const params = {
			...filters.prices,
			sizes: Array.from(filters.sizes),
			doughTypes: Array.from(filters.doughTypes),
			ingredients: Array.from(filters.selectedIngredients),
		}

		const query = QueryString.stringify(params, { arrayFormat: 'comma' })

		router.push(`?${query}`, { scroll: false })
	}, [
		filters.doughTypes,
		filters.prices,
		filters.selectedIngredients,
		filters.sizes,
		router,
	])
}
