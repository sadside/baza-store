import {ICategoryTitle} from "@/components/ui/category/categoryTitle/categoryTitle.interface";
import styles from './CategoryTitle.module.scss'

const CategoryTitle = ({title}: ICategoryTitle) => {
	return <div className={styles.wrapper}>{title}</div>
}

export default CategoryTitle