import styles from "./video.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Video = ({ src }: { src: string }) => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        className={`w-[100vw] h-[100vh] max-w-full`}
        key={src}
      >
        <source src={src} type="video/mp4" />
      </video>
    </>
  );
};
