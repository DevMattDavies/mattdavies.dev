import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../MasterPage/styles.module.scss";

import Section from "../Section/Section";
import Hamburger from "../SideNav/Hamburger/Hamburger";

import { setBodyBackgroundColorOnLoad } from "../../utils/setBodyBackgroundColorOnLoad";

export const MasterPage = (): ReactElement | null => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    setBodyBackgroundColorOnLoad(pathname);
  }, []);

  const pages = ["home", "about", "work", "contact"];

  return (
    <div className={styles.masterpage}>
      <Hamburger
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
