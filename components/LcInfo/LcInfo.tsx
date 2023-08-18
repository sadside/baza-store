import React from 'react';
import s from './LcInfo.module.scss'
import LcForm from "../LcForm/LcForm";
const LcInfo = () => {
    return (
        <div className={s.root}>
            <div className={s.title}>СВЕДЕНИЯ О ЛИЧНОМ КАБИНЕТЕ</div>
            <div className={s.warn}>*Поля, обязательные для заполнения</div>
            <LcForm />
        </div>
    );
};

export default LcInfo;