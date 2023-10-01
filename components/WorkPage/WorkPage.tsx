import { ReactElement, useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { projectData } from "../../data/projectData";
import ProjectPreview from "./ProjectPreview/ProjectPreview";
import ProjectFull from "./ProjectFull/ProjectFull";
import SouthIcon from "@mui/icons-material/South";
import WestIcon from "@mui/icons-material/West";

import type { ProjectType } from "../../types/types.d.ts";

const WorkPage = (): ReactElement | null => {
  const [isProjectFocused, setIsProjectFocused] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    ProjectType | undefined
  >(undefined);

  const ref = useRef(null);
  const scrollIntoView = () => {
    const element = document.getElementById("backBtn");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // useEffect(() => {
  //   if (isProjectFocused) {
  //     scrollIntoView(ref);
  //   }
  // }, [isProjectFocused]);

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
      {isProjectFocused ? (
        <div
          className={styles.work__backButton}
          onClick={() => {
            setIsProjectFocused(false);
          }}
        >
          <WestIcon />
          <p className={styles.work__backText}>all projects</p>
        </div>
      ) : (
        <div id="backBtn" className={styles.work__backButton}>
          <SouthIcon />
          <p className={styles.work__backText}></p>
        </div>
      )}
      {!isProjectFocused ? (
        <div className={styles.work__projects}>
          {projectData.map((project) => {
            return (
              <ProjectPreview
                key={project.id}
                projectInfo={project}
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
                isProjectFocused={isProjectFocused}
                setIsProjectFocused={setIsProjectFocused}
              />
            );
          })}
        </div>
      ) : null}
      {isProjectFocused ? (
        <div className={styles.work__projectFocused}>
          {selectedProject ? (
            <ProjectFull selectedProject={selectedProject} />
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default WorkPage;
