// import React from 'react';
//
// import styles from './DropdownCartItem.module.scss';
// import { IProductCart } from '@/stores/cart/cart.interface';
// import Image from 'next/image';
//
// export const DropdownCartItem = ({ name, price, image, quantityInCart, size }: IProductCart) => {
//   return (
//     <div className={styles.wrapper}>
//       <Image
//         src={image
//           .replace('http://127.0.0.1:8000/', 'http://thebaza.ru/')
//           .replace('http://localhost:8000/', 'http://thebaza.ru/')}
//         height={250}
//         width={180}
//         alt="product image"
//       />
//       <div className={styles.info}>
//         <div className={styles.title}>{name}</div>
//         <div className={styles.count}>
//           <div>
//             Количество: <span>{count}</span>
//           </div>
//           <div>
//             Размер: <span>{size}</span>
//           </div>
//         </div>
//         <div className={styles.price}>{`${quantityInCart && quantityInCart * price} ₽`}</div>
//       </div>
//     </div>
//   );
// };
