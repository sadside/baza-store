import {ICategoryGrid} from "@/components/ui/category/categoryGrid/categoryGrid.interface";
import CategoryItem from "@/components/ui/category/categoryItem/CategoryItem";
import styles from './CategoryGrid.module.scss'

const CategoryGrid = ({firstColumnItems, thirdColumnItems, secondColumnItems}: ICategoryGrid) => {
	return <div className={styles.wrapper}>
		<div className={styles.firstColumn}>
			{/*{firstColumnItems.map((item) => ({}))}*/}
			<CategoryItem title={'hello'} link={'/'} image={'/'}/>
			<CategoryItem title={'hello'} link={'/'} image={'/'}/>
			<CategoryItem title={'hello'} link={'/'} image={'/'}/>
		</div>
		<div className={styles.secondColumn}>
			<CategoryItem title={'hello'} link={'/'} image={'/'}/>
			<CategoryItem title={'hello'} link={'/'} image={'/'}/>
		</div>
		<div className={styles.thirdColumn}>
			<CategoryItem title={'hello'} link={'/'} image={'/'}/>
			<CategoryItem title={'hello'} link={'/'} image={'/'}/>
			<CategoryItem title={'hello'} link={'/'} image={'/'}/>
		</div>
	</div>
}

export default CategoryGrid