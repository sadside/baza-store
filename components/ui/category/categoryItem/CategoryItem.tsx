import {IColumnItem} from "@/components/ui/category/categoryGrid/categoryGrid.interface";
import Image from "next/image";
import Link from "next/link";
import styles from './CategoryItem.module.scss'

const CategoryItem = ({link, title,}: IColumnItem) => {
	return <Link className={styles.columnItem} href='/'>
		<Image
			src={'/qq.jpg'}
			alt="Picture of the author"
			fill
			className={styles.image}
		/>
		<div className={styles.title}>Обувь</div>
	</Link>
}

export default CategoryItem