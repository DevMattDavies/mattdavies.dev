import { MouseEventHandler, ReactElement } from "react";
import styles from "./styles.module.scss";

type CollapsedBarProps = {
  section: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const CollapsedBar = ({
  section,
  onClick,
}: CollapsedBarProps): ReactElement | null => {
  return (
    <div className={styles.collapsedbar} onClick={onClick}>
      <h2 className={styles.collapsedbar__text}>{section}</h2>
    </div>
  );
};

export default CollapsedBar;
