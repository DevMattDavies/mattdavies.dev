import { ReactElement } from "react";
import styles from "./styles.module.scss";

const AboutPage = (): ReactElement | null => {
  return (
    <div className={styles.about}>
      <h1 className={styles.about__title}>
        About <span className={styles.about__swash}>R</span>
      </h1>
    </div>
  );
};

export default AboutPage;
