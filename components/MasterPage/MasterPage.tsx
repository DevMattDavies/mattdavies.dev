import { MouseEventHandler, ReactElement, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../MasterPage/styles.module.scss";

import CollapsedBar from "../SideNav/CollapsedBar/CollapsedBar";
import { HomePage } from "../HomePage/HomePage";
import { AboutPage } from "../AboutPage/AboutPage";
import { WorkPage } from "../WorkPage/WorkPage";
import { ContactPage } from "../ContactPage/ContactPage";

export const MasterPage = (): ReactElement | null => {
  const router = useRouter();
  const currentPage = router.pathname;

  const navClick = (route: string): MouseEventHandler<HTMLDivElement> => {
    return () => {
      router.push(route);
    };
  };

  return (
    <div className={styles.sidenav}>
      <div
        className={`
          ${
            currentPage === "/"
              ? styles.sidenav__section__expanded
              : styles.sidenav__section__collapsed
          }
            ${styles.sidenav__home}
        `}
      >
        {currentPage === "/" ? (
          <HomePage />
        ) : (
          <CollapsedBar section="home" onClick={navClick("/")} />
        )}
      </div>
      <div
        className={`
          ${
            currentPage === "/about"
              ? styles.sidenav__section__expanded
              : styles.sidenav__section__collapsed
          }
            ${styles.sidenav__about}
        `}
      >
        {currentPage === "/about" ? (
          <AboutPage />
        ) : (
          <CollapsedBar section="about" onClick={navClick("/about")} />
        )}
      </div>
      <div
        className={`
          ${
            currentPage === "/work"
              ? styles.sidenav__section__expanded
              : styles.sidenav__section__collapsed
          }
            ${styles.sidenav__work}
        `}
      >
        {currentPage === "/work" ? (
          <WorkPage />
        ) : (
          <CollapsedBar section="work" onClick={navClick("/work")} />
        )}
      </div>
      <div
        className={`
          ${
            currentPage === "/contact"
              ? styles.sidenav__section__expanded
              : styles.sidenav__section__collapsed
          }
            ${styles.sidenav__contact}
        `}
      >
        {currentPage === "/contact" ? (
          <ContactPage />
        ) : (
          <CollapsedBar section="contact" onClick={navClick("/contact")} />
        )}
      </div>
    </div>
  );
};
