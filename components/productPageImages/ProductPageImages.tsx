'use client';

import { IFullProduct } from '@shared/types/models/Product';
import styles from './ProductPageImages.module.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Props = {
  product: IFullProduct;
};

export const ProductPageImages = ({ product }: Props) => {
  console.log(product);

  // @ts-ignore
  return (
    <div className={styles.images}>
      {/* {product?.image?.map((image: string) => {
        return (
          <Image
            src={image}
            width={2500}
            height={1150}
            alt="ssss"
            className={styles.productImage}
            key={Math.random() * 100}
          />
        );
      })} */}

      <div className={styles.imgList}>
        {product?.images?.map((image, index) => {
          return (
            <>
              <Image
                src={image.replace('http://127.0.0.1:8000/', 'http://thebaza.ru/')}
                width={500}
                height={1150}
                alt="Изображение товара"
                className={styles.productImage}
                key={index}
                priority
              />
            </>
          );
        })}
      </div>
      {
        <Swiper
          style={{
            // @ts-ignore
            '--swiper-pagination-color': 'black',
            '--swiper-pagination-bullet-inactive-color': 'white',
            '--swiper-pagination-bullet-inactive-opacity': '1',
            '--swiper-pagination-bullet-size': '10px',
            '--swiper-pagination-bullet-horizontal-gap': '6px',
          }}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          navigation={true}
          className={styles.swiper}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {product.images.map((image, index) => {
            return (
              <SwiperSlide>
                <Image
                  src={image.replace('http://127.0.0.1:8000/', 'http://thebaza.ru/')}
                  width={2500}
                  height={1150}
                  alt="ssss"
                  key={index}
                  className={styles.productImage}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      }
    </div>
  );
};
