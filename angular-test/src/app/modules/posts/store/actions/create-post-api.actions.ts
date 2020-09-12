import {createAction, props} from '@ngrx/store';
import {ICreatePost, IPost} from '../../../../models/posts';

export const createPost = createAction(
  '[Create Post Api] Create Post',
  props<{post: ICreatePost, photo: File}>()
);

export const createPostSuccess = createAction(
  '[Create Post Api] Create Post success',
  props<{post: IPost}>()
);

export const createPostFail = createAction(
  '[Create Post Api] Create Post fail',
  props<{error: any}>()
);
