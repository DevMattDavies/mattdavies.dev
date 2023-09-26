import { Dispatch, ReactElement, SetStateAction } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { projectData } from "../../../data/projectData";

type ProjectPreviewProps = {
  projectInfo: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
  setSelectedProject: Dispatch<SetStateAction<{} | undefined>>;
};

const ProjectPreview = ({
  projectInfo,
  setSelectedProject,
}: ProjectPreviewProps): ReactElement | null => {
  const handleClick = () => {
    const selectedProjectID = projectInfo.id;
    const selectedProject = projectData.find(
      (project) => project.id === selectedProjectID,
    );
    setSelectedProject(selectedProject);
  };

  return (
    <div className={styles.projectPreview} onClick={handleClick}>
      <div className={styles.projectPreview__imageContainer}>
        <Image
          src={projectInfo.image}
          className={styles.projectPreview__image}
          alt="project image"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.projectPreview__contentContainer}>
        <h4 className={styles.projectPreview__title}>{projectInfo.name}</h4>
        <p className={styles.projectPreview__description}>
          {projectInfo.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectPreview;
