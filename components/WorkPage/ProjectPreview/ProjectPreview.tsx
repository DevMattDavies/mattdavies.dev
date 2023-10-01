import { Dispatch, ReactElement, SetStateAction } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.scss";
import { projectData } from "../../../data/projectData";
import { scrollProjectIntoView } from "../../../utils/scrollProjectIntoView";

import type { ProjectType } from "../../../types/types.d.ts";

type ProjectPreviewProps = {
  projectInfo: ProjectType;
  selectedProject: ProjectType | undefined;
  setSelectedProject: Dispatch<SetStateAction<ProjectType | undefined>>;
  isProjectFocused: boolean;
  setIsProjectFocused: Dispatch<SetStateAction<boolean>>;
};

const ProjectPreview = ({
  projectInfo,
  setSelectedProject,
  isProjectFocused,
  setIsProjectFocused,
}: ProjectPreviewProps): ReactElement | null => {
  const handleClick = () => {
    const selectedProjectID = projectInfo.id;
    const selectedProject = projectData.find(
      (project) => project.id === selectedProjectID,
    );
    setSelectedProject(selectedProject);
    setIsProjectFocused(true);
    scrollProjectIntoView();
  };

  return (
    <div className={styles.projectPreview} onClick={handleClick}>
      <AnimatePresence>
        {!isProjectFocused ? (
          <motion.div
            key={projectInfo.id}
            className={styles.projectPreview__imageContainer}
            initial={false}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 1, delay: 0.4 },
            }}
          >
            <Image
              src={projectInfo.previewImage}
              className={styles.projectPreview__image}
              alt="project image"
              width={500}
              height={500}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default ProjectPreview;
