import { ReactElement } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

export const HomePage = (): ReactElement | null => {
  return (
    <div className={styles.home}>
      <h1 className={styles.home__title}>
        Welcome <span className={styles.home__swash}>U</span>
      </h1>
      <p className={styles.home__body}>
        Hello and welcome! I&apos;m Matt - currently a Software Engineer at BT,
        and a web design enthusiast at heart. With a unique background in
        project management, I found my true passion lies at the intersection of
        logic and art that web design presents, using my love for design to
        craft intuitive and captivating digital experiences.
      </p>
      <p className={styles.home__body}>
        As a seasoned React developer, my work is driven by a relentless passion
        for front-end design. My expertise lies in leveraging modern
        technologies to create beautifully crafted, user-centric designs that
        are not only visually pleasing but also robust enough to scale with user
        needs. For me, each project is an exciting new canvas, a fresh
        opportunity to bring a vision to life.
      </p>
      <p className={styles.home__body}>
        My tech stack leans towards Next.js, TypeScript, and various CSS
        approaches. Why? Because these tools help me deliver high-performing,
        scalable applications without compromising on the detail-oriented,
        tailored design that I love.
      </p>
      <p className={styles.home__body}>
        Feel free to explore my work, and do not hesitate to{" "}
        <Link href="/contact" style={{ textDecoration: "none" }}>
          <span className={styles.home__getintouch}>get in touch</span>
        </Link>
        . Let&apos;s create something great together!
      </p>
    </div>
  );
};
