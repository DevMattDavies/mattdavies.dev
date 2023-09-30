import { ReactElement, useState } from "react";
import styles from "./styles.module.scss";
import { projectData } from "../../data/projectData";
import ProjectPreview from "./ProjectPreview/ProjectPreview";
import SouthIcon from "@mui/icons-material/South";
const WorkPage = (): ReactElement | null => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<{} | undefined>({});

  return (
    <div className={styles.work}>
      <h1 className={styles.work__title}>
        Work <span className={styles.work__swash}>D</span>
      </h1>
      <p className={styles.work__body}>
        A versatile front-end developer, I&apos;ve worked on a wide selection of
        projects for different clients; ranging from small businesses, to shop
        fronts, to personal websites with headless CMS functionality.
      </p>
      <p className={styles.work__body}>Check out some of my work below!</p>
      <SouthIcon />
      <div className={styles.work__projects}>
        {projectData.map((project) => {
          return (
            <ProjectPreview
              key={project.id}
              projectInfo={project}
              setSelectedProject={setSelectedProject}
            />
          );
        })}
      </div>
      {isProjectModalOpen ? (
        <div className={styles.work__projectModal}></div>
      ) : null}
    </div>
  );
};

export default WorkPage;
