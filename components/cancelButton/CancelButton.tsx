import clsx from "clsx";
import styles from "./CancelButton.module.scss";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useState } from "react";

type Props = {
    open: boolean;
    handleClick: () => void;
};

const path01Variants = {
    open: { d: "M3.06061 2.99999L21.0606 21" },
    closed: { d: "M0 9.5L24 9.5" },
};

const path02Variants = {
    open: { d: "M3.00006 21.0607L21 3.06064" },
    moving: { d: "M0 14.5L24 14.5" },
    closed: { d: "M0 14.5L15 14.5" },
};

export const CancelButton = ({ open, handleClick }: Props) => {
    // return (
    // {
    /* <div className={styles.wrapper} onClick={handleClick}>
                <div
                    className={clsx({
                        [styles.first]: true,
                        [styles.activeFirst]: !open,
                    })}
                ></div>
                <div
                    className={clsx({
                        [styles.second]: true,
                        [styles.activeSecond]: !open,
                    })}
                ></div>
            </div> */
    // }

    const path01Controls = useAnimation();
    const path02Controls = useAnimation();

    const onClick = async () => {
        handleClick();
        if (!open) {
            await path02Controls.start(path02Variants.moving);
            path01Controls.start(path01Variants.open);
            path02Controls.start(path02Variants.open);
        } else {
            path01Controls.start(path01Variants.closed);
            await path02Controls.start(path02Variants.moving);
            path02Controls.start(path02Variants.closed);
        }
    };

    return (
        <div onClick={onClick} className={styles.cancelBtn}>
            <svg width="24" height="24" viewBox="0 0 24 24">
                <motion.path
                    {...path01Variants.closed}
                    animate={path01Controls}
                    transition={{ duration: 0.2 }}
                    stroke="#000000"
                    strokeWidth="2"
                />
                <motion.path
                    {...path02Variants.closed}
                    animate={path02Controls}
                    transition={{ duration: 0.2 }}
                    stroke="#000000"
                    strokeWidth="2"
                />
            </svg>
        </div>
    );
};
