import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../MasterPage/styles.module.scss";

import Section from "../Section/Section";
import MobileNav from "../SideNav/MobileNav/MobileNav";

import { setBodyBackgroundColorOnLoad } from "../../utils/setBodyBackgroundColorOnLoad";

export const MasterPage = (): ReactElement | null => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number | null>(null);

  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    setBodyBackgroundColorOnLoad(pathname);
  }, [pathname]);

  // useEffect(() => {
  //   isModalOpen
  //     ? (document.body.style.overflow = "hidden")
  //     : (document.body.style.overflow = "unset");
  // }, [isModalOpen]);

  // useEffect(() => {
  //   if (isModalOpen) {
  //     // Store the current scroll position
  //     setScrollPosition(window.scrollY);
  //   }
  // }, [isModalOpen]);

  const pages = ["home", "about", "work", "contact"];

  return (
    <div className={styles.masterpage}>
      {isModalOpen && <div className={styles.masterpage__blur} />}
      <MobileNav
        toggled={isModalOpen}
        toggle={setIsModalOpen}
        pathname={pathname}
        // scrollPosition={scrollPosition}
      />
      {pages.map((page) => {
        return <Section key={page} section={page} pathname={pathname} />;
      })}
    </div>
  );
};
