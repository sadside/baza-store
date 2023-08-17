import { MenuCategory } from "../menuCategory/MenuCategory";
import styles from "./DropdownMenuContent.module.scss";

type Props = {};

export const DropdownMenuContent = ({}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        <MenuCategory />
      </div>
    </div>
  );
};
