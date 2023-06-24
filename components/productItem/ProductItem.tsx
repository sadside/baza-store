import { IProduct } from '@/components/productItem/productItem.interface'
import Image from 'next/image'
import Link from 'next/link'
import styles from './ProductItem.module.scss'

const ProductItem = ({ image, price, name, countColors, id }: IProduct) => {
	return (
		<Link className={styles.product} href={`/products/${id}`} key={id}>
			<Image
				src={image}
				alt={'j'}
				className={styles.img}
				width={1000}
				height={100}
			/>
			<div className={styles.name}>{name}</div>
			<div className={styles.price}>{price} ₽</div>
			<div className={styles.countColor}>{countColors} цвета</div>
		</Link>
	)
}

export default ProductItem
