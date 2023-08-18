import React from 'react';
import s from './MiniOrder.module.scss'
import {miniOrder} from "@/components/orders/Orders";
type Props = {
    o: miniOrder
}
const MiniOrder = ({o}:Props) => {
    const {name, img, price, id, count} = o
    return (
        <div className={s.root}>
            <div className={s.left}>
                <img className={s.img} src={img}/>
                <div className={s.card}>
                    <span className={s.title}>{name}</span>
                    <span className={s.article}>Артикул: {id}</span>
                </div>
            </div>
            <span className={s.count}>{count} шт.</span>
            <span className={s.price}>{price*count} ₽</span>
        </div>
    );
};

export default MiniOrder;