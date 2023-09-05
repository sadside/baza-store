import { HTMLAttributes } from "react";
import styles from "./Button.module.scss";
import { Loader } from "@/components/loader/Loader";

interface Props extends HTMLAttributes<HTMLInputElement> {
  height?: number;
  width?: number;
  text: string;
  loading?: boolean;
}

const Button = ({
  text,
  loading = false,
  ...props
}: Props) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundColor: "#000000",
      }}
      {...props}
    >
      {!loading ? (
        <input className={styles.button} type="submit" value={text} />
      ) : (
        <Loader color="#fff" height={44} width={44} />
      )}
    </div>
  );
};

export default Button;
