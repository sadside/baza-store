import SvgSelector from "@/utils/SvgSelector";
import styles from "./Gid.module.scss";

type Props = {
    title: string;
    description: string;
    idIcon: string;
};

export const Gid = ({ title, description, idIcon }: Props) => {
    return (
        <div className={styles.wrapper}>
            <SvgSelector id={idIcon} />
            <div className={styles.gidInfo}>
                <div className={styles.title}>{title}</div>
                <div>{description}</div>
            </div>
        </div>
    );
};
