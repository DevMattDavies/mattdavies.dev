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

  useEffect(() => {
    const body = document.body;
    if (isModalOpen) {
      // Store scroll position when the modal is opened
      const currentScrollPosition = window.scrollY;
      setScrollPosition(currentScrollPosition);
      body.style.overflow = "hidden";
      body.style.position = "fixed";
      body.style.touchAction = "none";
      body.style.top = `-${currentScrollPosition}px`;
    } else {
      if (scrollPosition !== null) {
        body.style.overflow = "unset";
        body.style.position = "unset";
        body.style.touchAction = "unset";
        window.scrollTo(0, scrollPosition);
      }
    }

    return () => {
      body.style.position = "static";
      body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const tempScrollTop = window.scrollY;

    window.scrollTo(0, tempScrollTop);

    const body = document.body;
    body.addEventListener(
      "touchmove",
      function (e) {
        e.preventDefault();
      },
      false,
    );
  }, [isModalOpen, scrollPosition]);

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
