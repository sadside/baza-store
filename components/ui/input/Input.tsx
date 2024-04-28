import styles from './Input.module.scss';

type InputProps = {
  width?: number;
  height?: number;
  placeholder?: string;
  errorMessage?: string;
  margin?: number;
  padding?: number;
};

const Input = ({ placeholder = '', width = 392, height = 44, errorMessage = '', margin = 0 }: InputProps) => {
  return (
    <div style={{ width, height, margin }}>
      <label>
        <input type="text" className={`${styles.input} ${errorMessage && styles.error}`} placeholder={placeholder} />
        {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
      </label>
    </div>
  );
};

export default Input;
