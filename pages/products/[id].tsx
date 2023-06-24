import { IProduct } from '@/components/productItem/productItem.interface'
import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'

export interface IProductPageProps {
	product: IProduct
}

export default function ({ product }: IProductPageProps) {
	const { query } = useRouter()

	console.log(product)

	return (
		<div>
			<Head>
				<title>{product.name} - Baza Store</title>
			</Head>
			<div>{product.name}</div>
			<div>{product.price}</div>
		</div>
	)
}

export const getStaticPaths = async () => {
	const { data } = await axios.get('http://localhost:3000/api/products')

	const paths = data.map((product: IProduct) => ({
		params: { id: product.id.toString() },
	}))

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async (context: any) => {
	const { id } = context.params
	console.log(context.params)

	const { data } = await axios.get(`http://localhost:3000/api/products/${id}`)

	return {
		props: {
			product: data,
		},
	}
}
