import styles from "./UkButton.module.scss";
import Ripple from "react-ripples";
import { ReactNode } from "react";

export interface IUkButtonProps {
  label?: string;
  children?: ReactNode;
}

export default function UkButton(props: IUkButtonProps) {
  return (
    <span className={styles.rippleContainer}>
      <Ripple className={styles.ripple}>
        <button className={styles.ukButton}>
          {props.children ?? props.label}
        </button>
      </Ripple>
    </span>
  );
}
