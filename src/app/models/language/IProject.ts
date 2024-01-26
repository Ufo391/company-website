import { IPost } from "./IPost";

export interface IProject {
  content: IPost;
  role: string;
  industry: string;
  durationInMonths: number;
  techStack: string[];
}
