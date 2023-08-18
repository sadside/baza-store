import React from 'react';
import s from './WelcomeTxt.module.scss'

const WelcomeText = () => {
    const name = 'Геннадий'
    return (<div className={s.root}>
            <span className={s.top}>
            <div className={s.name}>ДОБРО ПОЖАЛОВАТЬ, {name}</div>
            <span className={s.vix}>Выход</span>
            </span>
        <div className={s.content}><span className={s.txt}>Мы вносим улучшения в "Мою учетную запись", чтобы предложить вам лучший опыт. Некоторые из ваших заказов могут быть не видны ниже, пожалуйста, <span
            className={s.line}> с нами для </span>получения дополнительной помощи. Если вы хотите вернуть заказ, который не отображается ниже, пожалуйста, посетите нашу страницу <span
            className={s.line}>Возврат</span>, чтобы начать процесс возврата.

                Если у вас есть какие-либо вопросы или вам нужна дополнительная помощь, пожалуйста, <span
                className={s.line}>свяжитесь с нами</span></span></div>
    </div>);
};

export default WelcomeText;