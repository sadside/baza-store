"use client";
import { createRef, useCallback, useEffect, useRef, useState } from "react";
import styles from "./Video.module.scss";
import SvgSelector from "@/utils/SvgSelector";
import { heightChanged } from "@/stores/layout/menu/init";
import Photo from "@/components/ui/photo/Photo";

export const Video = ({ src }: { src: string }) => {
  const [state, setState] = useState("");
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setState("123");
    if (window) setWidth(window.innerWidth)

  }, []);

  const [height, setHeight] = useState(0);
  const measuredRef = useCallback((node: any) => {
    if (node !== null) {
      const height = node.getBoundingClientRect().height
      if (height) {
        setHeight(height);
        heightChanged(node.getBoundingClientRect().height);
        console.log(node.getBoundingClientRect().height, 'h')
      }
    }
  }, []);


  return (
    <>
      {state && width > 725 ? (
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
