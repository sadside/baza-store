import CategoryGrid from "@/components/ui/category/categoryGrid/CategoryGrid";
import CategoryTitle from "@/components/ui/category/categoryTitle/CategoryTitle";
import Head from "next/head";

import styles from "./women-page.module.scss";

export const WomenPage = ({}) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Для женщин</title>
      </Head>
      <div>
        <CategoryTitle title={"Для женщин"} />
        <CategoryGrid />
      </div>
    </div>
  );
};
