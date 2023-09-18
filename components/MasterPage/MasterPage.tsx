import { ReactElement, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../MasterPage/styles.module.scss";

import CollapsedBar from "../SideNav/CollapsedBar/CollapsedBar";
import { HomePage } from "../HomePage/HomePage";
import { AboutPage } from "../AboutPage/AboutPage";
import { WorkPage } from "../WorkPage/WorkPage";
import { ContactPage } from "../ContactPage/ContactPage";

import { setBodyBackgroundColorOnLoad } from "../../utils/setBodyBackgroundColorOnLoad";

export const MasterPage = (): ReactElement | null => {
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    setBodyBackgroundColorOnLoad(pathname);
  }, []);

  const pageVariants = {
    initial: {
      y: "-100vh",
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
    },
  };

  const durations = {
    home: 1.6,
    about: 1.3,
    work: 1,
    contact: 0.7,
  };

  return (
    <div className={styles.sidenav}>
      <motion.div
        initial="initial"
        animate="enter"
        variants={pathname !== "/" ? pageVariants : undefined}
        transition={{ duration: durations.home, type: "ease-in-out" }}
        className={`
          ${
            pathname === "/"
              ? styles.sidenav__section__expanded
              : styles.sidenav__section
          }
            ${styles.sidenav__home}
        `}
      >
        {pathname === "/" ? (
          <HomePage />
        ) : (
          <Link href="/" className={styles.sidenav__link}>
            <CollapsedBar section="home" number="1" />
          </Link>
        )}
      </motion.div>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pathname !== "/about" ? pageVariants : undefined}
        transition={{ duration: durations.about, type: "ease-in-out" }}
        className={`
          ${
            pathname === "/about"
              ? styles.sidenav__section__expanded
              : styles.sidenav__section
          }
            ${styles.sidenav__about}
        `}
      >
        {pathname === "/about" ? (
          <AboutPage />
        ) : (
          <Link href="/about">
            <CollapsedBar section="about" number="2" />
          </Link>
        )}
      </motion.div>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pathname !== "/work" ? pageVariants : undefined}
        transition={{ duration: durations.work, type: "ease-in-out" }}
        className={`
          ${
            pathname === "/work"
              ? styles.sidenav__section__expanded
              : styles.sidenav__section
          }
            ${styles.sidenav__work}
        `}
      >
        {pathname === "/work" ? (
          <WorkPage />
        ) : (
          <Link href="/work">
            <CollapsedBar section="work" number="3" />
          </Link>
        )}
      </motion.div>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pathname !== "/contact" ? pageVariants : undefined}
        transition={{ duration: durations.contact, type: "ease-in-out" }}
        className={`
          ${
            pathname === "/contact"
              ? styles.sidenav__section__expanded
              : styles.sidenav__section
          }
            ${styles.sidenav__contact}
        `}
      >
        {pathname === "/contact" ? (
          <ContactPage />
        ) : (
          <Link href="/contact">
            <CollapsedBar section="contact" number="4" />
          </Link>
        )}
      </motion.div>
    </div>
  );
};
