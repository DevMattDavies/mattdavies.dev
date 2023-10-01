import { StaticImport } from "next/dist/shared/lib/get-img-props";

declare type ProjectType = {
  id: number;
  name: string;
  webLink: string;
  gitLink: string;
  description: string[];
  previewImage: string | StaticImport;
  projectImage: string | StaticImport;
};

export { ProjectType };
