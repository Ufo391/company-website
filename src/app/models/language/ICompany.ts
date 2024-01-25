import { IContacts } from "./IContacts";
import { IPost } from "./IPost";
import { IFooter } from "./IFooter";
import { IProjects } from "./IProjects";
import { IServices } from "./IServices";
import { ISidebar } from "./ISidebar";

export type LanguageCode = "de" | "en" | "pl"

export interface ICompany{
  companyName: string;
  langCode: LanguageCode;
  bannerTitle: string;
  bannerSubtitles: string[];
  aboutMe: IPost;
  services: IServices;
  projects: IProjects;
  contact: IContacts;
  footer: IFooter;
  sidebar: ISidebar;
}
