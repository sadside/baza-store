import React, { useState } from "react";
import styles from "./ProductDetails.module.scss";
import SvgSelector from "@/utils/SvgSelector";
import { CancelButton } from "../cancelButton/CancelButton";
import { AnimatePresence, motion } from "framer-motion";
import { Gid } from "../gid/Gid";

type Props = {};

export const ProductDetails = (props: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div>Детали продукта</div>
                <CancelButton
                    open={open}
                    handleClick={() => setOpen((prev) => !prev)}
                />
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        style={{ overflow: "hidden" }}
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        transition={{ duration: 0.4 }}
                        exit={{ height: 0 }}
                        key={"container"}
                    >
                        <div className={styles.productDetail}>
                            Итальянская куртка, вырезанная до коробчатой посадки
                            из мохеровой шерсти, подчеркнутая полированными
                            монограммами Томаса Берберри на манжетах. Это
                            произведение является частью нашей коллекции Future
                            Heritage, современной капсулы с возвышенными
                            предметами первой необходимости. Длина куртки: 72
                            см/28,4 дюйма. Это основано на размере UK 6, так как
                            пропорции немного меняются в зависимости от размера.
                            Высота модели: 180 см/5 футов 11 дюймов. Модель
                            носит размер UK 6. Наружный: 60% мохер, 40% шерсть
                            Под воротничок: 50% шерсть, 50% вискоза Подкладка:
                            100% cupro Накладка рукава: 50% ацетат, 50% чаше
                            Однобортная застежка, выемчатые лацканы, прорезной
                            карман, карманы с клапаном, рабочие манжеты,
                            одновентиляционное отверстие Специализированная
                            химчистка Сделано в Италии Товар 80417491
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div style={{ marginTop: open ? "25px" : "0" }}>
                <Gid
                    idIcon="gid"
                    title="Гид по уходу"
                    description="Мы расскажем, как долго сохранять качество продукта"
                />

                <Gid
                    idIcon="map"
                    title="Доставка и возврат"
                    description="Условия доставки и возврата товара"
                />

                <Gid
                    idIcon="chat"
                    title="Online консультация"
                    description="Получите консультацию любым удобным способом"
                />
            </motion.div>
        </div>
    );
};
