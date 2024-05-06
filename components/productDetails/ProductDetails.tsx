'use client';

import styles from './ProductDetails.module.scss';
import topArrow from '@shared/assets/topArrow.svg';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
type Props = {
  details: string;
  useAdvice: string;
  delivery: string;
};

export const ProductDetails = ({ details, useAdvice, delivery }: Props) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const [isUseAdviceVisible, setIsUseAdviceVisible] = useState(false);
  const [isDeliveryVisible, setIsDeliveryVisible] = useState(false);

  const detailsHandleClick = () => {
    setIsDetailsVisible((prev) => !prev);
  };

  const useAdviceHandleClick = () => {
    setIsUseAdviceVisible((prev) => !prev);
  };

  const deliveryHandleClick = () => {
    setIsDeliveryVisible((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <div className="py-[24px] w-full border-y border-black-50 text-black-200 hover:text-black transition duration-200">
        <div className="w-full">
          <div className="w-full flex justify-between items-center cursor-pointer" onClick={detailsHandleClick}>
            <h2 className="font-semibold uppercase text-[14px]">Детали продукта</h2>
            {isDetailsVisible ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.3367 7.845L6.16417 15.0175L4.98584 13.8392L12.1575 6.66667H5.83667V5H15.0033V14.1667H13.3367V7.845V7.845Z"
                  fill="#777777"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.1582 13.3372L4.98486 6.16466L6.1632 4.98633L13.3357 12.158V5.83716H15.0024V15.0038H5.8357V13.3372H12.1582Z"
                  fill="#777777"
                />
              </svg>
            )}
          </div>
          <AnimatePresence>
            {isDetailsVisible && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                style={{
                  overflow: 'hidden',
                }}
                className="mt-3"
              >
                {details}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="py-[24px] w-full border-b border-black-50 text-black-200 hover:text-black transition duration-200">
        <div className="w-full">
          <div className="w-full flex justify-between items-center cursor-pointer" onClick={useAdviceHandleClick}>
            <h2 className="font-semibold uppercase text-[14px]">Состав и уход</h2>
            {isUseAdviceVisible ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.3367 7.845L6.16417 15.0175L4.98584 13.8392L12.1575 6.66667H5.83667V5H15.0033V14.1667H13.3367V7.845V7.845Z"
                  fill="#777777"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.1582 13.3372L4.98486 6.16466L6.1632 4.98633L13.3357 12.158V5.83716H15.0024V15.0038H5.8357V13.3372H12.1582Z"
                  fill="#777777"
                />
              </svg>
            )}
          </div>
          <AnimatePresence>
            {isUseAdviceVisible && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                style={{
                  overflow: 'hidden',
                }}
                className="mt-3"
              >
                {useAdvice}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="py-[24px] w-full border-b border-black-50 text-black-200 hover:text-black transition duration-200 overflow-hidden">
        <div className="w-full">
          <div className="w-full flex justify-between items-center cursor-pointer" onClick={deliveryHandleClick}>
            <h2 className="font-semibold uppercase text-[14px]">Доставка</h2>
            {isUseAdviceVisible ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.3367 7.845L6.16417 15.0175L4.98584 13.8392L12.1575 6.66667H5.83667V5H15.0033V14.1667H13.3367V7.845V7.845Z"
                  fill="#777777"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.1582 13.3372L4.98486 6.16466L6.1632 4.98633L13.3357 12.158V5.83716H15.0024V15.0038H5.8357V13.3372H12.1582Z"
                  fill="#777777"
                />
              </svg>
            )}
          </div>
          <AnimatePresence>
            {isDeliveryVisible && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                style={{
                  overflow: 'hidden',
                }}
                className="mt-3"
              >
                {delivery}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
