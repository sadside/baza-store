import { IProduct } from '@/components/productItem/productItem.interface'
import MainPage from '@/components/screens/mainPage/MainPage'
import axios from 'axios'
import { GetServerSideProps, NextPage } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface Props {
	products: IProduct[]
}

const Home: NextPage<Props> = ({ products }) => {
	return <MainPage products={products} />
}

export const getServerSideProps: GetServerSideProps = async () => {
	const { data } = await axios.get('http://localhost:3000/api/products')

	return {
		props: {
			products: data,
		},
	}
}

export default Home
