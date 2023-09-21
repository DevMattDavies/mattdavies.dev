import { Dispatch, ReactElement, SetStateAction } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./styles.module.scss";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

type MenuProps = {
  toggled: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
  pathname: string;
};

const MobileNav = ({
  toggled,
  toggle,
  pathname,
}: MenuProps): ReactElement | null => {
  let backgroundColor;
  switch (pathname) {
    case "/":
      backgroundColor = `home`;
      break;
    case "/about":
      backgroundColor = `about`;
      break;
    case "/work":
      backgroundColor = `work`;
      break;
    case "/contact":
      backgroundColor = `contact`;
      break;
    default:
      backgroundColor = "home";
      break;
  }

  const handleToggle = () => {
    toggle(!toggled);
  };

  return (
    <div className={`${styles.nav} ${styles[`nav__${backgroundColor}`]}`}>
      <div className={styles.nav__menuContainer} onClick={handleToggle}>
        <h3 className={styles.nav__menu}>menu</h3>
        {toggled ? (
          <KeyboardArrowDownOutlinedIcon className={styles.nav__arrow} />
        ) : (
          <KeyboardArrowRightOutlinedIcon className={styles.nav__arrow} />
        )}
      </div>
      <AnimatePresence>
        {toggled ? (
          <div className={styles.nav__linksContainer}>
            <nav className={styles.nav__links}>
              <motion.div
                initial={{ opacity: 0, x: "-200px" }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.2 } }}
                exit={{
                  opacity: 0,
                  x: "200px",
                  transition: { duration: 0.2, delay: 0.4 },
                }}
                // transition={{ duration: 0.2 }}
              >
                <Link
                  href="/"
                  onClick={handleToggle}
                  style={{ textDecoration: "none" }}
                >
                  <p className={`${styles.nav__text} ${styles.nav__home}`}>
                    home
                  </p>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "200px" }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                exit={{
                  opacity: 0,
                  x: "200px",
                  transition: { duration: 0.2, delay: 0.3 },
                }}
                // transition={{ duration: 0.5 }}
              >
                <Link
                  href="/about"
                  onClick={handleToggle}
                  style={{ textDecoration: "none" }}
                >
                  <p className={`${styles.nav__text} ${styles.nav__about}`}>
                    about
                  </p>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-200px" }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
                exit={{
                  opacity: 0,
                  x: "200px",
                  transition: { duration: 0.2, delay: 0.2 },
                }}
                // transition={{ duration: 0.7 }}
              >
                <Link
                  href="/work"
                  onClick={handleToggle}
                  style={{ textDecoration: "none" }}
                >
                  <p className={`${styles.nav__text} ${styles.nav__work}`}>
                    work
                  </p>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "200px" }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.9 } }}
                exit={{
                  opacity: 0,
                  x: "200px",
                  transition: { duration: 0.2, delay: 0.1 },
                }}
                // transition={{ duration: 0.9 }}
              >
                <Link
                  href="/contact"
                  onClick={handleToggle}
                  style={{ textDecoration: "none" }}
                >
                  <p className={`${styles.nav__text} ${styles.nav__contact}`}>
                    contact
                  </p>
                </Link>
              </motion.div>
            </nav>
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
