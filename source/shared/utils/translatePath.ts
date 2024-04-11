import { links } from "@/components/menuLinks/menuLinks.data";
import { generatePath } from "./generatePath";

export const translatePath = (path: string): any => {
  links.forEach((link) => {
    if (path === link.link) {
      return {
        label: link.title,
        path: generatePath(link)
      };
    }
  });
};