import { ReactElement } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

import Headshot from "../../public/assets/headshot.jpg";

const HomePage = (): ReactElement | null => {
  return (
    <div className={styles.home}>
      <h1 className={styles.home__title}>
        Welcome <span className={styles.home__swash}>U</span>
      </h1>
      <p className={styles.home__body}>
        Hello! I&apos;m Matt, and welcome to my portfolio – your gateway to the
        world of captivating web design!
      </p>
      <p className={styles.home__body}>
        As a passionate frontend developer, I&apos;m dedicated to crafting
        immersive digital experiences. Dive into my portfolio and discover how I
        bring creativity and innovation to every project.
      </p>
      <p className={styles.home__body}>
        Feel free to explore my work, and do not hesitate to{" "}
        <Link href="/contact" style={{ textDecoration: "none" }}>
          <span className={styles.home__getintouch}>get in touch</span>
        </Link>
        . Let&apos;s create something great together!
      </p>
      <Image
        src={Headshot}
        className={styles.home__image}
        alt="headshot"
      ></Image>
    </div>
  );
};

export default HomePage;
