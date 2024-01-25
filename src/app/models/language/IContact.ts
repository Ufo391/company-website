import { IPost } from './IPost';

export type ContactType = 'phone' | 'mail' | 'location' | 'social-media';

export interface IContact {
  type: ContactType;
  value: IPost;
}
