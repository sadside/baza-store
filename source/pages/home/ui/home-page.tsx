'use client';

import styles from '../ui/home-page.module.scss';
import { Category } from '@/app/page';
import { HomePageLinks } from '@widgets/home-page-links';
import { changeVisibleMan, changeVisibleWoman } from '@/stores/home/home';
import Footer from '@/source/layouts/main-layout/footer/Footer';
import { Video } from '@widgets/video';

interface Props {
  links: Category[];
  src: string;
}

export const HomePage = ({ links, src }: Props) => {
  return (
    <>
      <div
        className={styles.wrap}
        onClick={() => {
          changeVisibleWoman(false);
          changeVisibleMan(false);
        }}
      >
        <Video src={'./video1.mp4'} />
        <HomePageLinks links={links} />
      </div>
      <div className={styles.footerMobile}>
        <Footer />
      </div>
    </>
  );
};
