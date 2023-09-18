import { MouseEventHandler, ReactElement } from "react";
import styles from "./styles.module.scss";

type CollapsedBarProps = {
  section: string;
  number?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const CollapsedBar = ({
  section,
  number,
  onClick,
}: CollapsedBarProps): ReactElement | null => {
  return (
    <div className={styles.collapsedbar} onClick={onClick}>
      <div className={styles.collapsedbar__numbers}>
        <p className={styles.collapsedbar__number}>{number}</p>
        <p className={styles.collapsedbar__swash}>c</p>
      </div>
      <h2 className={styles.collapsedbar__text}>{section}</h2>
    </div>
  );
};

export default CollapsedBar;
