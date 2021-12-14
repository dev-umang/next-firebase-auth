import styles from "./loadingScreen.module.scss";
import { Transition } from "react-transition-group";
import { CSSProperties } from "react";
export interface ILoadingScreenProps {
  show: boolean;
}

export default function LoadingScreen(props: ILoadingScreenProps) {
  const duration = 300;

  const dedfaultStyle: CSSProperties = {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles: { [state: string]: CSSProperties } = {
    entering: { opacity: 0, transform: "scale(0)" },
    entered: { opacity: 1, transform: "scale(1)" },
    exiting: { opacity: 1, transform: "scale(1)" },
    exited: { opacity: 0, transform: "scale(0)" },
  };
  return (
    <Transition in={props.show} timeout={duration}>
      {(state) => (
        <div
          style={{ ...dedfaultStyle, ...transitionStyles[state] }}
          className={styles.loadingWrapper}
        >
          LOADING...
        </div>
      )}
    </Transition>
  );
}
