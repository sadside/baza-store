import React from 'react';
import s from './index.module.scss'
import SvgSelector from "../../../../utils/SvgSelector";
import {$activeOplata, clickOplata} from "@/stores/zakaz/init";
import {useUnit} from "effector-react";


type Props = {
    type?: string
    setType: any
}
const MethOplat = () => {
    const type = useUnit($activeOplata)
    let a =
        [{type:'Onl', name:'Банковской картой онлайн'},
        {type:'Nal', name:'Наличными или картой при получении'},
        {type:'SPB', name:'Система быстрых платежей'},]
    return (
        <div className={s.root}>
            <span className={s.title}>Способ оплаты</span>
            <div className={s.btns}>
                {a.map(o => {
                    return (
                        <div className={s.item} onClick={()=> clickOplata(o.type)}>
                            <span><SvgSelector id={type === o.type?'radioActive':'radio'} /></span>
                            <span className={s.text}>{o.name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default MethOplat;