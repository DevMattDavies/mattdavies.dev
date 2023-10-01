import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import { ProjectType } from "../../../types/types";

type ProjectFullProps = {
  selectedProject: ProjectType;
};

const ProjectFull = ({
  selectedProject,
}: ProjectFullProps): ReactElement | null => {
  return (
    <div key={selectedProject.id} className={styles.projectFull}>
      <div className={styles.projectFull__imageContainer}>
        <Image
          className={styles.projectFull__image}
          src={selectedProject.image}
          alt={selectedProject.name}
          width={2000}
          height={2000}
        />
      </div>
      <h2 className={styles.projectFull__title}>{selectedProject.name}</h2>
      <div className={styles.projectFull__links}>
        <Link
          className={styles.projectFull__link}
          href={selectedProject.webLink}
          target="_blank"
        >
          {`// ${selectedProject.webLink.slice(8)}`}
        </Link>
        <Link
          className={styles.projectFull__link}
          href={selectedProject.gitLink}
          target="_blank"
        >
          {`// github`}
        </Link>
      </div>
      {selectedProject.description.map((paragraph) => {
        return (
          <p key={selectedProject.name} className={styles.projectFull__body}>
            {paragraph}
          </p>
        );
      })}
    </div>
  );
};

export default ProjectFull;
