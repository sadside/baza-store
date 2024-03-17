import styles from "./video.module.scss";

export const Video = ({ src }: { src: string }) => {
  return (
    <>
      <video
        src={src}
        autoPlay
        loop
        muted
        className={styles.video}
        key={src}
      ></video>
    </>
  );
};
