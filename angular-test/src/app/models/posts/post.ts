import {ICreatePost} from './create-post';

export interface IPost extends ICreatePost{
  id:	string;
  photoUrl?:	string;
}
