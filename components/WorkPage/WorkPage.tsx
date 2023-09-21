import { ReactElement } from "react";
import styles from "./styles.module.scss";

const WorkPage = (): ReactElement | null => {
  return (
    <div className={styles.work}>
      <h1 className={styles.work__title}>
        Work <span className={styles.work__swash}>D</span>
      </h1>
    </div>
  );
};

export default WorkPage;
