import ProductItem from "@/components/productItem/ProductItem";
import {IProducts} from "@/components/products/products.interface";
import {FC, PropsWithChildren} from 'react'

import styles from './Products.module.scss'

const Products = ({products}: IProducts) => {
	return <div className={styles.productsWrapper}>{products.map(product => (
		<ProductItem id={product.id} price={product.price} name={product.name} countColors={product.countColors}
		             image={product.image}/>))}</div>
}

export default Products