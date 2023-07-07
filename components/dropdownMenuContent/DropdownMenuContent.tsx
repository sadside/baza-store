import { AnimatedText } from "../animatedText/AnimatedText";
import { MenuCategory } from "../menuCategory/MenuCategory";
import { ICategory } from "../menuCategory/menuCategory.interface";
import styles from "./DropdownMenuContent.module.scss";

type Props = {
  content: any;
};

export const DropdownMenuContent = ({ content }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {content.map((category: ICategory) => (
          <MenuCategory category={category} />
        ))}
      </div>
    </div>
  );
};
