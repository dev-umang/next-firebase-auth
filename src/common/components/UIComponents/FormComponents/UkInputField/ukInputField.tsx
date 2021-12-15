import { ChangeEvent } from "react";
import styles from "./ukInputField.module.scss";

export interface IUkInputProps {
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  id?: string;
  inputClass?: string;
  className?: string;
}

export default function UkInput(props: IUkInputProps) {
  return (
    <div className={styles.outerWrapper}>
      <div className={`${styles.inputWrapper} ${props.className ?? ""}`}>
        <input
          type={props.type}
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          className={`${styles.input} ${props.inputClass ?? ""}`}
        />
        {/* <label className={styles.inputLabel}>{props.label}</label> */}
      </div>
    </div>
  );
}
