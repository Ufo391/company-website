import { IContact } from './IContact';
import { IPost } from './IPost';

export interface IContacts {
  title: string;
  values: IContact[];
  description: IPost;
  offerDesc: string;
  offerName: string;
  offerDialog: IPost;
}
