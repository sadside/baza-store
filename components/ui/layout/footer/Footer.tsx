import SvgSelector from "@/utils/SvgSelector";
import styles from "./Footer.module.scss";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blocks}>
        <div className={styles.leftBlock}>
          <div className={styles.linkItem}>
            <div className={styles.icon}>
              <SvgSelector id="geo" />
            </div>
            <div className={styles.link}>
              г. Оренбург, ул. Поляничко 9, секция 1
            </div>
          </div>
          <a className={styles.linkItem} href="tel:+79228865945">
            <div className={styles.icon}>
              <SvgSelector id="phone" />
            </div>
            <div className={styles.link}>+7 (922) 886-59-45 </div>
          </a>
          <div className={styles.linkItem}>
            <div className={styles.icon}>
              <SvgSelector id="email" />
            </div>
            <Link className={styles.link} href="/offer">
              Публичная оферта
            </Link>
          </div>
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.linkItem}>
            <div className={styles.icon}>
              <SvgSelector id="instagram" />
            </div>
            <div className={styles.link}>baza.store.orb</div>
          </div>
          <a
            className={styles.linkItem}
            href="https://t.me/baza_store"
            target="blank"
          >
            <div className={styles.icon}>
              <SvgSelector id="telegram" />
            </div>
            <div className={styles.link}>baza_store</div>
          </a>
          <div className={styles.linkItem}>
            <div className={styles.icon}>
              <SvgSelector id="vk" />
            </div>
            <div className={styles.link}>baza_store</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
