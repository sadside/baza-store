"use client";

import styles from "../ui/home-page.module.scss";
import { Category } from "@/app/page";
import { Video } from "@widgets/video";
import { HomePageLinks } from "@widgets/home-page-links";
import { changeVisibleMan, changeVisibleWoman } from "@/stores/home/home";
import Footer from "@/source/layouts/main-layout/footer/Footer";

interface Props {
  links: Category[];
}

export const HomePage = ({ links }: Props) => {
  return (
    <>
      <div className={styles.wrap}
           onClick={() => {
             changeVisibleWoman(false);
             changeVisibleMan(false);
           }}
      >
        <Video src={"./video.mp4"} />
        <HomePageLinks links={links} />
      </div>
      <div className={styles.footerMobile}>
        <Footer />
      </div>
    </>
  );
};
