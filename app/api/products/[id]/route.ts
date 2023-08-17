import img1 from '@/assets/products/1.png'
import { IProduct } from '@/components/productItem/productItem.interface'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export const products: IProduct[] = [
	{
		name: 'Пуховая жилетка кроп',
		countColors: 4,
		price: 6500,
		id: 1,
		image: 'https://assets.burberry.com/is/image/Burberryltd/44D7B11D-5802-4358-9C72-AE8FE3041089?$BBY_V2_SL_3x4$&wid=640&hei=852',
		images: ['https://assets.burberry.com/is/image/Burberryltd/44D7B11D-5802-4358-9C72-AE8FE3041089?$BBY_V2_SL_3x4$&wid=640&hei=852', 'https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_3x4$&wid=640&hei=852', 'https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_3x4$&wid=640&hei=852']
	},
	{
		name: 'Пуховая  кроп',
		countColors: 4,
		price: 3000,
		id: 2,
		image:
			'https://assets.burberry.com/is/image/Burberryltd/44D7B11D-5802-4358-9C72-AE8FE3041089?$BBY_V2_SL_3x4$&wid=640&hei=852',
			images: ['https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_1x1$&wid=2500&hei=2500', 'https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_1x1$&wid=2500&hei=2500', 'https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_1x1$&wid=2500&hei=2500']
	},
	{
		name: 'Пуховая жилетка ',
		countColors: 4,
		price: 5500,
		id: 3,
		image:
			'https://assets.burberry.com/is/image/Burberryltd/44D7B11D-5802-4358-9C72-AE8FE3041089?$BBY_V2_SL_3x4$&wid=640&hei=852',
			images: ['https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_1x1$&wid=2500&hei=2500', 'https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_1x1$&wid=2500&hei=2500', 'https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_1x1$&wid=2500&hei=2500']
	},
	{
		name: 'Куртка ебкая',
		countColors: 4,
		price: 2000,
		id: 4,
		image:
			'https://assets.burberry.com/is/image/Burberryltd/44D7B11D-5802-4358-9C72-AE8FE3041089?$BBY_V2_SL_3x4$&wid=640&hei=852',
			images: ['https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_1x1$&wid=2500&hei=2500', 'https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_1x1$&wid=2500&hei=2500', 'https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_1x1$&wid=2500&hei=2500']

	},
	{
		name: 'На зиму ок',
		countColors: 4,
		price: 22000,
		id: 5,
		image:
			'https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_3x4$&wid=640&hei=852',
			images: ['https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_1x1$&wid=2500&hei=2500', 'https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_1x1$&wid=2500&hei=2500', 'https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_1x1$&wid=2500&hei=2500']
	},
	{
		name: 'Пуховая жилетка кроп',
		countColors: 4,
		price: 6500,
		id: 6,
		image:
			'https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_3x4$&wid=640&hei=852',
			images: ['https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_1x1$&wid=2500&hei=2500', 'https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_1x1$&wid=2500&hei=2500', 'https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_1x1$&wid=2500&hei=2500']
	},
	{
		name: 'Пуховая жилетка кроп',
		countColors: 4,
		price: 6500,
		id: 7,
		image:
			'https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_3x4$&wid=640&hei=852',
			images: ['https://assets.burberry.com/is/image/Burberryltd/44D7B11D-5802-4358-9C72-AE8FE3041089?$BBY_V2_SL_3x4$&wid=640&hei=852', 'https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_3x4$&wid=640&hei=852', 'https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_3x4$&wid=640&hei=852']

	},
	{
		name: 'Пуховая жилетка кроп',
		countColors: 4,
		price: 6500,
		id: 8,
		image:
			'https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_3x4$&wid=640&hei=852',
			images: ['https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_1x1$&wid=2500&hei=2500', 'https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_1x1$&wid=2500&hei=2500', 'https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_1x1$&wid=2500&hei=2500']
	},
	{
		name: 'Пуховая жилетка кроп',
		countColors: 4,
		price: 6500,
		id: 9,
		image:
			'https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_3x4$&wid=640&hei=852',
			images: ['https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_1x1$&wid=2500&hei=2500', 'https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_1x1$&wid=2500&hei=2500', 'https://assets.burberry.com/is/image/Burberryltd/CCA704C5-4710-4D48-AC3A-10168A203408?$BBY_V2_SL_1x1$&wid=2500&hei=2500']
	},
]

export async function GET(req: Request) {

  const id = req.url.replace('http://localhost:3000/api/products/','')

  const getProductById = (id: string | string[]) => {
		return products.filter(product => product.id == +id)
	}

  console.log(id)

	if (id) return NextResponse.json(getProductById(id)[0]);
}