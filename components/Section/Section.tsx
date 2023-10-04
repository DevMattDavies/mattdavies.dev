import { ReactElement } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../Section/styles.module.scss";

import HomePage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import WorkPage from "../WorkPage/WorkPage";
import ContactPage from "../ContactPage/ContactPage";
import CollapsedBar from "../SideNav/CollapsedBar/CollapsedBar";

type SectionProps = {
  section: string;
  pathname: string;
};

export const Section = ({
  section,
  pathname,
}: SectionProps): ReactElement | null => {
  const pageVariants = {
    initial: {
      y: "-100dvh",
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
    },
  };

  const animationDurations = {
    home: 1.6,
    about: 1.3,
    work: 1,
    contact: 0.7,
  };

  const sectionData = {
    home: {
      path: "/",
      page: HomePage,
      number: "1",
      duration: animationDurations.home,
    },
    about: {
      path: "/about",
      page: AboutPage,
      number: "2",
      duration: animationDurations.about,
    },
    work: {
      path: "/work",
      page: WorkPage,
      number: "3",
      duration: animationDurations.work,
    },
    contact: {
      path: "/contact",
      page: ContactPage,
      number: "4",
      duration: animationDurations.contact,
    },
  };

  const sectionPath = sectionData[section as keyof typeof sectionData]?.path;
  const SectionPage = sectionData[section as keyof typeof sectionData]?.page;
  const sectionNumber =
    sectionData[section as keyof typeof sectionData]?.number;
  const animationDuration =
    sectionData[section as keyof typeof sectionData]?.duration;

  return (
    <motion.div
      initial="initial"
      animate="enter"
      variants={pathname !== sectionPath ? pageVariants : undefined}
      transition={{
        duration: animationDuration,
        type: "ease-in-out",
      }}
      className={`
          ${
            pathname === sectionPath ? styles.section__expanded : styles.section
          }
              ${styles[`section__${section}`]}
        `}
    >
      {pathname === sectionPath ? (
        <SectionPage />
      ) : (
        <Link href={sectionPath} className={styles.section__link}>
          <CollapsedBar section={section} number={sectionNumber} />
        </Link>
      )}
    </motion.div>
  );
};

export default Section;
