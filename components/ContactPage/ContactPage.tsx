import { ReactElement } from "react";
import styles from "./styles.module.scss";

const ContactPage = (): ReactElement | null => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.contact__title}>
        Contact <span className={styles.contact__swash}>W</span>
      </h1>
    </div>
  );
};

export default ContactPage;
