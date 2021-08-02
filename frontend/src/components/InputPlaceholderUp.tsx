import { InputHTMLAttributes } from 'react';
import styles from '../styles/components/InputPlaceholderUp.module.css';

export type InputPlaceholderUpProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputPlaceholderUp = ({ label, ...props }: InputPlaceholderUpProps) => {

  return (
    <div className={styles.containerContent}>
      <label className={styles.labelCustomInput}>
        <input
          className={styles.inputCustomInput}
          {...props}
        />
        <p className={styles.pCustomInput}>{label}</p>
      </label>
    </div>
  );

}

export default InputPlaceholderUp;
