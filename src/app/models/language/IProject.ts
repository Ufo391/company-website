import { IPost } from './IPost';

export interface IProject {
  description: IPost;
  listing: string[];
  conclusion: string;
  role: string;
  industry: string;
  durationInMonths: number;
  techStack: string[];
}
