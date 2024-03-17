import styles from "../ui/home-page.module.scss";
import Photo from "@/components/ui/photo/Photo";
import { Category } from "@/app/page";
import { Video } from "@widgets/video";
import { HomePageLinks } from "@widgets/home-page-links";
import { Breadcrumbs } from "@shared/ui/breadcrumbs/ui/breadcrumbs";

interface Props {
  links: Category[];
}

export const HomePage = ({ links }: Props) => {
  return (
    <div className={styles.wrap}>
      <Video src={"./video.mp4"} />
      <HomePageLinks links={links} />
      <Photo />
    </div>
  );
};
