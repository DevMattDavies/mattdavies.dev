import { StaticImport } from "next/dist/shared/lib/get-img-props";

declare type ProjectType = {
  id: number;
  name: string;
  webLink: string;
  gitLink: string;
  description: string[];
  previewImage: string | StaticImport;
  screenshotDesktop: string | StaticImport;
  screenshotMobile: string | StaticImport;
};

export { ProjectType };
