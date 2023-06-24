import img1 from '@/assets/products/1.png'
import { IProduct } from '@/components/productItem/productItem.interface'
import { NextApiRequest, NextApiResponse } from 'next'

export const products = [
	{
		name: 'Пуховая жилетка кроп',
		countColors: 4,
		price: 6500,
		id: 1,
		image: img1,
	},
	{
		name: 'Пуховая  кроп',
		countColors: 4,
		price: 3000,
		id: 2,
		image:
			'https://imgcdn.zarina.ru/upload/images/31234/thumb/450_9999/3123468118_13_1.jpg?t=1677510831',
	},
	{
		name: 'Пуховая жилетка ',
		countColors: 4,
		price: 5500,
		id: 3,
		image:
			'https://imgcdn.zarina.ru/upload/images/31234/thumb/450_9999/3123468118_13_1.jpg?t=1677510831',
	},
	{
		name: 'Куртка ебкая',
		countColors: 4,
		price: 2000,
		id: 4,
		image:
			'https://imgcdn.zarina.ru/upload/images/31234/thumb/450_9999/3123468118_13_1.jpg?t=1677510831',
	},
	{
		name: 'На зиму ок',
		countColors: 4,
		price: 22000,
		id: 5,
		image:
			'https://imgcdn.zarina.ru/upload/images/31234/thumb/450_9999/3123468118_13_1.jpg?t=1677510831',
	},
	{
		name: 'Пуховая жилетка кроп',
		countColors: 4,
		price: 6500,
		id: 6,
		image:
			'https://imgcdn.zarina.ru/upload/images/31234/thumb/450_9999/3123468118_13_1.jpg?t=1677510831',
	},
	{
		name: 'Пуховая жилетка кроп',
		countColors: 4,
		price: 6500,
		id: 7,
		image:
			'https://imgcdn.zarina.ru/upload/images/31234/thumb/450_9999/3123468118_13_1.jpg?t=1677510831',
	},
	{
		name: 'Пуховая жилетка кроп',
		countColors: 4,
		price: 6500,
		id: 8,
		image:
			'https://imgcdn.zarina.ru/upload/images/31234/thumb/450_9999/3123468118_13_1.jpg?t=1677510831',
	},
	{
		name: 'Пуховая жилетка кроп',
		countColors: 4,
		price: 6500,
		id: 9,
		image:
			'https://imgcdn.zarina.ru/upload/images/31234/thumb/450_9999/3123468118_13_1.jpg?t=1677510831',
	},
]

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IProduct>
) {
	const { id } = req.query

	const getProductById = (id: string | string[]) => {
		return products.filter(product => product.id == +id)
	}
	if (id) res.status(200).json(getProductById(id)[0])
}
