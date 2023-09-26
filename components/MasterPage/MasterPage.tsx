import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../MasterPage/styles.module.scss";

import Section from "../Section/Section";
import MobileNav from "../SideNav/MobileNav/MobileNav";

import { setBodyBackgroundColorOnLoad } from "../../utils/setBodyBackgroundColorOnLoad";
import { useLockBodyOnNavOpen } from "../../hooks/useLockBodyOnNavOpen";

export const MasterPage = (): ReactElement | null => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { lockBody, unlockBody } = useLockBodyOnNavOpen();

  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    setBodyBackgroundColorOnLoad(pathname);
  }, [pathname]);

  useEffect(() => {
    if (isModalOpen) {
      lockBody();
    } else {
      unlockBody();
    }
  }, [isModalOpen]);

  const pages = ["home", "about", "work", "contact"];

  return (
    <div className={styles.masterpage}>
      {isModalOpen && <div className={styles.masterpage__blur} />}
      <MobileNav
        toggled={isModalOpen}
        toggle={setIsModalOpen}
        pathname={pathname}
      />
      {pages.map((page) => {
        return <Section key={page} section={page} pathname={pathname} />;
      })}
    </div>
  );
};
