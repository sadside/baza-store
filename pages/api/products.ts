// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IProduct } from '@/components/productItem/productItem.interface'
import { products } from '@/pages/api/products/[id]'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IProduct[]>
) {
	res.status(200).json(products)
}
