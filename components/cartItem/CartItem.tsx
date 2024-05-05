// 'use client';
//
// import React from 'react';
// import { IProductCart } from '@/stores/cart/cart.interface';
//
// import styles from './CartItem.module.scss';
// import Image from 'next/image';
// import { $user, addToServerFx, removeCartItem } from '@/stores/cart/init';
// import { useUnit } from 'effector-react';
// import Link from 'next/link';
//
// export const CartItem = ({ name, price, size, image, count, id, color, slug, server_count }: IProductCart) => {
//   const user = useUnit($user);
//
//   const isLoading1 = useUnit(addToServerFx.pending);
//   const isLoading2 = useUnit(removeCartItem.pending);
//
//   return (
//     <div className={styles.wrapper}>
//       <Image
//         src={image.replace('http://127.0.0.1:8000/', 'http://thebaza.ru/')}
//         width={300}
//         height={300}
//         alt={'img'}
//         className={styles.img}
//       />
//       <div className={styles.info}>
//         <Link className={styles.name} href={`/products/${slug}`}>
//           {name}
//         </Link>
//         <div className={styles.size}>Размер: {size}</div>
//         <div className={styles.size}>Цвет: {color}</div>
//         <div className={styles.count}>
//           Количество:
//           <span
//             onClick={() => {
//               if (!isLoading2 && !isLoading1) {
//                 if (!user)
//                   productCounDecremented({
//                     name,
//                     price,
//                     size,
//                     image,
//                     count,
//                     id,
//                     color,
//                     old_price: price,
//                     slug,
//                     server_count,
//                   });
//
//                 if (user) removeCartItem(id || 0);
//               }
//             }}
//           >
//             -
//           </span>
//           <span>{count}</span>
//           <span
//             onClick={() => {
//               if (!isLoading2 && !isLoading1 && count && count < server_count) {
//                 if (!user)
//                   productCountIncremented({
//                     name,
//                     price,
//                     size,
//                     image,
//                     count,
//                     id,
//                     color,
//                     old_price: price,
//                     slug,
//                     server_count,
//                   });
//
//                 if (user && count && count < server_count) addToServerFx(id || 0);
//               }
//             }}
//           >
//             +
//           </span>
//         </div>
//       </div>
//
//       {/*<div className={styles.price}>{`${formatMany(*/}
//       {/*  count,*/}
//       {/*  price / 100,*/}
//       {/*)} ₽`}</div>*/}
//     </div>
//   );
// };
