import styles from "./video.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
//
// position: absolute !important;
// min-width: 100% !important;
// min-height: 100% !important;
// left: 50% !important;
// top: 50% !important;
// z-index: -1 !important;
// transform: translate(-50%, -50%) !important;

export const Video = ({ src }: { src: string }) => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          minWidth: "100%",
          minHeight: "100%",
          left: "50%",
          top: "50%",
          zIndex: -1,
          transform: "translate(-50%, -50%)"
        }}
        src={src}
      >
        <source src={src} type="video/mp4" className="w-full h-full" />
      </video>
    </>
  );
};
