"use client";
import { createRef, useCallback, useEffect, useRef, useState } from "react";
import styles from "./Video.module.scss";
import SvgSelector from "@/utils/SvgSelector";
import { heightChanged } from "@/stores/layout/menu/init";

export const Video = ({ src }: { src: string }) => {
  const [state, setState] = useState("");

  useEffect(() => {
    setState("123");
  }, []);

  const [height, setHeight] = useState(0);

  const measuredRef = useCallback((node: any) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
      heightChanged(node.getBoundingClientRect().height);
      console.log(node.getBoundingClientRect().height, 'h')
    }
  }, []);

  return (
    <>
      {state ? (
        //@ts-ignore
        <div className={styles.wrap} ref={measuredRef}>
          <video
            src={src}
            autoPlay
            loop
            muted
            className={styles.video}
            key={src}
          ></video>
          <div className={styles.content}></div>
        </div>
      ) : (
        <div className={styles.load}></div>
      )}
    </>
  );
};
