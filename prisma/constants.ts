export const categories = [
	{ id: 1, name: 'Pizzas' },
	{ id: 2, name: 'Combo' },
	{ id: 3, name: 'Snacks' },
	{ id: 4, name: 'Cocktails' },
	{ id: 5, name: 'Coffe' },
	{ id: 6, name: 'Drinks' },
	{ id: 7, name: 'Deserts' },
]

export const ingredients = [
	{
		name: 'Cheese crust',
		price: 3.5,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
	},
	{
		name: 'Creamy mozzarella',
		price: 1.5,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
	},
	{
		name: 'Cheddar and parmesan cheeses',
		price: 1.5,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
	},
	{
		name: 'Spicy jalapeno pepper',
		price: 1.1,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
	},
	{
		name: 'Tender chicken',
		price: 1.5,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
	},
	{
		name: 'Champignon mushrooms',
		price: 1.1,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
	},
	{
		name: 'Ham',
		price: 1.5,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
	},
	{
		name: 'Spicy pepperoni',
		price: 1.5,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
	},
	{
		name: 'Spicy chorizo',
		price: 1.5,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
	},
	{
		name: 'Pickled cucumbers',
		price: 1.1,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
	},
	{
		name: 'Fresh tomatoes',
		price: 1.1,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
	},
	{
		name: 'Red onion',
		price: 1.1,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
	},
	{
		name: 'Juicy pineapples',
		price: 1.1,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
	},
	{
		name: 'Italian herbs',
		price: 0.7,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
	},
	{
		name: 'Sweet pepper',
		price: 1.1,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
	},
	{
		name: 'Feta cheese cubes',
		price: 1.5,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
	},
	{
		name: 'Meatballs',
		price: 1.5,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
	},
].map((item, i) => ({ id: i + 1, ...item }))

export const products = [
	{
		name: 'Omelet with Ham and Mushrooms',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.webp',
		categoryId: 2,
	},
	{
		name: 'Omelet with Pepperoni',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE94ECF33B0C46BA410DEC1B1DD6F8.webp',
		categoryId: 2,
	},
	{
		name: 'Caffè Latte',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
		categoryId: 2,
	},
	{
		name: 'Denwich Ham & Cheese',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.webp',
		categoryId: 3,
	},
	{
		name: 'Chicken Nuggets',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE7D618B5C7EC29350069AE9532C6E.webp',
		categoryId: 3,
	},
	{
		name: 'Baked Potatoes with Sauce 🌱',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EED646A9CD324C962C6BEA78124F19.webp',
		categoryId: 3,
	},
	{
		name: 'Dodster',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.webp',
		categoryId: 3,
	},
	{
		name: 'Spicy Dodster 🌶️🌶️',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE796FD3B594068F7A752DF8161D04.webp',
		categoryId: 3,
	},
	{
		name: 'Banana Milkshake',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EEE20B8772A72A9B60CFB20012C185.webp',
		categoryId: 4,
	},
	{
		name: 'Caramel Apple Milkshake',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE79702E2A22E693D96133906FB1B8.webp',
		categoryId: 4,
	},
	{
		name: 'Oreo Cookie Milkshake',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp',
		categoryId: 4,
	},
	{
		name: 'Classic Milkshake 👶',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE796F93FB126693F96CB1D3E403FB.webp',
		categoryId: 4,
	},
	{
		name: 'Irish Cappuccino',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE7D61999EBDA59C10E216430A6093.webp',
		categoryId: 5,
	},
	{
		name: 'Caramel Cappuccino',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.webp',
		categoryId: 5,
	},
	{
		name: 'Coconut Latte',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.webp',
		categoryId: 5,
	},
	{
		name: 'Americano',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp',
		categoryId: 5,
	},
	{
		name: 'Caffè Latte',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
		categoryId: 5,
	},
]

export const pizzas = [
	{
		name: 'Dodo Pizza',
		description:
			'Dodo Pizza with fine ground beef, spicy pepperoni salami, fresh mushrooms, green bell pepper, red onions, mozzarella, and crispy bacon on fine tomato sauce, refined with fresh cherry tomatoes and garlic.',
		price: 'from €14.90',
		priceInt: 14.9,
		ingredients: {},
		pizzaConfig: {
			doughtype: 'classic',
			size: 'large',
		},
	},
	{
		name: 'Mexican',
		description:
			'Tomato sauce, chicken breast fillet, jalapeños, mozzarella, red onions, green bell peppers, tomatoes, Sriracha sauce.',
		price: 'from €14.90',
		ingredients: {},
	},
	{
		name: 'Pizza Cheeseburger',
		description: 'Like a cheeseburger, but a pizza.',
		price: 'from €15.50',
		ingredients: {},
	},
	{
		name: 'Grill Veggie',
		description: 'Grilled vegetables, tomatoes, fresh red onions, mozzarella.',
		price: 'from €14.90',
		ingredients: {},
	},
	{
		name: 'Half & Half Pizza',
		description:
			'Large Half & Half Pizza - Double the fun: Combine two of your favorite flavors in one pizza!',
		price: 'from €18.20',
		ingredients: {},
	},
	{
		name: 'L.O.V.E. Pizza',
		description:
			'We LOVE Pizza :) Heart-shaped salami pizza with spicy salami and mozzarella on fine tomato sauce.',
		price: '€15.50',
		ingredients: {},
	},
	{
		name: 'Kids Pizza',
		description: 'Tomato sauce, mozzarella.',
		price: '€10.90',
		ingredients: {},
	},
	{
		name: 'Pizza Margherita',
		description:
			'Pizza base with tomato sauce and mozzarella. Customize your pizza with toppings of your choice.',
		price: 'from €8.90',
		ingredients: {},
	},
	{
		name: 'Pizza Margherita VEGAN',
		description: 'Vegan cheese substitute, tomato sauce.',
		price: 'from €9.90',
		ingredients: {},
	},
	{
		name: 'Salami',
		description:
			'Salami pizza with spicy salami and extra mozzarella on fine tomato sauce.',
		price: 'from €10.50',
		ingredients: {},
	},
	{
		name: 'Munich',
		description:
			"More Munich flavor than you've ever tried! Pizza sauce, mozzarella, fresh red onions, pepperoni salami, white sausage, bacon, fresh bell peppers, cherry tomatoes, fresh white mushrooms, ranch sauce, garlic powder.",
		price: 'from €15.50',
		ingredients: {},
	},
	{
		name: 'Pizza Tomato',
		description:
			'Margherita pizza with extra mozzarella and fresh tomatoes on fine tomato sauce, seasoned with a flavorful Italian herb mix.',
		price: 'from €9.90',
		ingredients: {},
	},
	{
		name: '4 Cheeses',
		description:
			'Pizza dough, cheese-cream sauce, extra mozzarella, cheddar, Grana Padano, Gorgonzola.',
		price: 'from €13.90',
		ingredients: {},
	},
	{
		name: 'Fiesta',
		description:
			'Fiesta pizza with fine chicken breast fillet, spicy pepperoni salami, mozzarella, red onions, and garlic, with fresh tomatoes, garnished with burger sauce.',
		price: 'from €15.50',
		ingredients: {},
	},
	{
		name: 'Carbonara',
		description:
			'Pizza dough, cheese-cream sauce, mozzarella, red onions, cheddar, Grana Padano, bacon, cherry tomatoes, Italian herb mix.',
		price: 'from €13.90',
		ingredients: {},
	},
	{
		name: 'Pepperoni Fresh',
		description:
			'Extra mozzarella, pepperoni salami, bell peppers, tomato sauce.',
		price: 'from €12.90',
		ingredients: {},
	},
	{
		name: 'Double Pepperoni',
		description: 'Pepperoni salami.',
		price: 'from €14.90',
		ingredients: {},
	},
	{
		name: 'Super Meat',
		description:
			'Pizza dough, tomato sauce, chicken breast fillet, ground beef, mozzarella, salami, pepperoni salami, bacon.',
		price: 'from €15.50',
		ingredients: {},
	},
	{
		name: 'Chicken BBQ',
		description:
			'Chicken BBQ pizza with extra chicken breast fillet, crispy bacon, red onions, mozzarella, and tomato sauce, garnished with spicy BBQ sauce.',
		price: 'from €13.90',
		ingredients: {},
	},
	{
		name: 'Chicken & Curry',
		description:
			'Pizza dough, tomato sauce, chicken breast fillet, mozzarella, green bell peppers, pineapple, curry sauce.',
		price: 'from €13.90',
		ingredients: {},
	},
	{
		name: 'Chicken Ranch',
		description:
			'Chicken Ranch pizza with fine chicken breast fillet, mozzarella, and garlic on cream sauce, with fresh tomatoes, garnished with creamy ranch sauce.',
		price: 'from €13.90',
		ingredients: {},
	},
	{
		name: 'Diabolo',
		description:
			'Diabolo pizza with spicy pepperoni salami, fiery jalapeños, and mozzarella on spicy Sriracha sauce and fine tomato sauce.',
		price: 'from €12.90',
		ingredients: {},
	},
	{
		name: 'Salami Supreme',
		description:
			'Salami Supreme pizza with fiery pepperoni salami and extra mozzarella on fine tomato sauce.',
		price: 'from €12.90',
		ingredients: {},
	},
	{
		name: 'Tonno',
		description:
			'Pizza dough, tomato sauce, tuna, mozzarella, red onions, corn, olives.',
		price: 'from €11.90',
		ingredients: {},
	},
	{
		name: 'Veggie',
		description:
			'Veggie pizza with fresh tomatoes, green bell peppers, corn, red onions, and creamy mozzarella on fine tomato sauce.',
		price: 'from €11.90',
		ingredients: {},
	},
	{
		name: 'Regina',
		description:
			'Pizza Regina with tender ham, fresh mushrooms, and extra mozzarella on fine tomato sauce.',
		price: 'from 11.90€',
		ingredients: {},
	},
	{
		name: 'Hawaii',
		description:
			'Pizza Hawaii with cooked ham, mozzarella, and pineapple on fine tomato sauce.',
		price: 'from 10.90€',
		ingredients: {},
	},
	{
		name: 'Funghi',
		description:
			'Pizza Funghi with mozzarella and fresh mushrooms on tomato sauce.',
		price: 'from 10.90€',
		ingredients: {},
	},
	{
		name: 'Prosciutto',
		description:
			'Pizza Prosciutto with tender ham and extra mozzarella on tomato sauce.',
		price: 'from 10.90€',
		ingredients: {},
	},
]
