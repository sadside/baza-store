import React from 'react';
import s from './Banner.module.scss'
const Banner = () => {
    return (
        <div className={s.banner}>
            <img src={'https://s3-alpha-sig.figma.com/img/1408/f1fd/1d2b81ebadcab684d695d066af41d394?Expires=1692576000&Signature=M7MFuVTK0eObSGKAXI0xL4AHIW55LbmHVBbchssXzMWbN08bCqw-TvhX81gY5smJuBsmog4AbRbmF6ur0~dlIbDdrzyiEKHxk3qolUk4uU1CcQ4RCnj83VnAvGgLmY3RWvV8EWIiANSJN6e-fgUuhmG26sRxUm0i~NINmSo0lVeJ8Wd4QSjq6wDJhsrSJBGLrVr-xykuAMGAdwkU-6BG9JUZzszkX11VJQ4zf2SU6GcurJUE1SAXh8PpnUJJ6-pJARvwaYMH0XyvTZn3RS1KWweRKWTQbwj1hPYu1t4erubtqWkqJ9atMRNe4ZB1Umd-iD4ill~gq6rJ4sZbZNUdUg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} alt='Баннер' className={s.img}/>
            <div className={s.txt}>МОЙ АККАУНТ</div>
        </div>
    );
};

export default Banner;