import { createEvent } from "effector";

export interface ICategory {
  id: number;
  name: string;
  slug: string;
  children: ICategory[];
}

const user = createEvent();
console.log();
