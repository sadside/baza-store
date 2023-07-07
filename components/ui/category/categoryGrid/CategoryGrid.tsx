import { ICategoryGrid } from "@/components/ui/category/categoryGrid/categoryGrid.interface";
import CategoryItem from "@/components/ui/category/categoryItem/CategoryItem";
import styles from "./CategoryGrid.module.scss";

const CategoryGrid = ({
  firstColumnItems,
  thirdColumnItems,
  secondColumnItems,
}: ICategoryGrid) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.threeItems}>
        <CategoryItem title={"Обувь"} link={"/"} image={"/"} />
        <CategoryItem title={"hello"} link={"/"} image={"/"} />
        <CategoryItem title={"hello"} link={"/"} image={"/"} />
      </div>
      <div className={styles.twoItems}>
        <CategoryItem title={"hello"} link={"/"} image={"/"} />
        <CategoryItem title={"hello"} link={"/"} image={"/"} />
      </div>
      <div className={styles.threeItems}>
        <CategoryItem title={"hello"} link={"/"} image={"/"} />
        <CategoryItem title={"hello"} link={"/"} image={"/"} />
        <CategoryItem title={"hello"} link={"/"} image={"/"} />
      </div>
    </div>
  );
};

export default CategoryGrid;
