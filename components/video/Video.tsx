"use client";
import ReactPlayer from "react-player/youtube";
import styles from "./Video.module.scss";
import YouTube, { YouTubeProps } from "react-youtube";

export const Video = () => {
  return (
    <div className={styles.wrap}>
      <ReactPlayer
        url="https://www.youtube.com/embed/xqjPiRs9zbo?controls=0"
        playing={true}
        loop={true}
        controls={false}
        volume={0}
        className={styles.video}
      />
      <div className={styles.content}></div>
      <div className={styles.bot}></div>
      <div className={styles.top}></div>
    </div>
  );
};
