import { IForWomen } from "@/components/screens/forWomen/forWomen.interface";
import CategoryGrid from "@/components/ui/category/categoryGrid/CategoryGrid";
import CategoryTitle from "@/components/ui/category/categoryTitle/CategoryTitle";
import Head from "next/head";

import styles from "./ForWomen.module.scss";

const ForWomenPage = ({}: IForWomen) => {
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

export default ForWomenPage;
