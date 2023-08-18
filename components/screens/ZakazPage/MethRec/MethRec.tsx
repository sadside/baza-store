import React from 'react';
import s from './index.module.scss'
import ZakazDannie from "../ZakazDannie/ZakazDannie";
import {$activeMeth, clickDost, clickSam} from "@/stores/zakaz/init";
import {useUnit} from "effector-react";
type Props = {
    adres: string
    timeOfHran: string
    gifted: string
}
const MethRec = ({adres, timeOfHran, gifted}:Props) => {
    let aaaarrrr = {
        main: [
            {val: 'Геннадий', type: 'name'},
            {val: 'Васькин', type: 'surname'},
            {val: 'ebanarot@gmail.com', type: 'mail'},
            {val: '+7(123) 123‒45‒67', type: 'phoneNumber'},
        ],
        adres: [
            {val: 'Самара', type: 'city'},
            {val: 'пр-т Кирова', type: 'street'},
            {val: '322a', type: 'house'},
            {val: '6', type: 'frame'},
            {val: '97', type: 'room'},
        ]
    }
    let active = useUnit($activeMeth) === 'sam'
    return (
        <>
            <div className={s.root}>
                <span className={s.poluch}>Способ получения</span>
                <ul>
                    <li onClick={() => clickSam()} className={active ? s.active:undefined}>Самовывоз</li>
                    <li onClick={() => clickDost()} className={!active ? s.active:undefined}>Доставка</li>
                </ul>
                {active ?
                    <div className={s.sam}>
                        <div className={s.content}>
                            <div className={s.card}>
                                <span className={s.title}>Пункт выдачи BAZA STORE</span>
                                <span className={s.adres}>{adres}</span>
                                <div className={s.frame}>
                                    <span className={s.bolt}>Работает:</span>
                                    <span className={s.def}>Ежедневно с 09:00 до 20:00</span>
                                </div>
                                <div className={s.frame}>
                                    <span className={s.bolt}>Срок хранения:</span>
                                    <span className={s.def}>{timeOfHran}</span>
                                </div>
                                <span className={s.bottom}>{gifted}</span>
                            </div>
                            <img
                                src={'https://s3-alpha-sig.figma.com/img/5987/ff16/beda79fbd16327a4aab2b58ab58ecc50?Expires=1692576000&Signature=jWhe~TyB-WhoM73OSRvgayOEtGzqOWWHnZ8N1Ouoq7cZusfq6EIzNVlaaJAkXOOuAWXYjL9BYhl8NcAnMgissW7KRPtnIXDlpZs3IsRvaJc8JsQDrcC2kf5W32txtG1PzM3HMcjqlU5M8bkUX4Ln1B~QrEN07utKWznQMIJSg6~f5oC27N3buCIi4apa9K5f2ddFMa3d~Jv7BgxJq-W9YigWHjA-esSjLGAv8z2XWVJpGW2-YSgeas14frBnl~xdcUE64YGR-5unkp8JbtvwHB4jVC8zUD7eA1m3ntrggHbNX-ezpiN~~Br9yGn-p8wOjd4c8PLlcFp6hhV3eO1osw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                                alt={'ebalRot'}
                                className={s.img}
                            />
                        </div>
                    </div>
                    :
                        <ZakazDannie/>
                }
            </div>
        </>);
};

export default MethRec;