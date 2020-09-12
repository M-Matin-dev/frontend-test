import {createAction, props} from '@ngrx/store';
import {IPost} from '../../../../models/posts';

export const loadAll = createAction(
  '[Post List Api] load all'
);

export const loadAllSuccess = createAction(
  '[Posts List Api] load all success',
  props<{posts: IPost[]}>()
);

export const loadAllFail = createAction(
  '[Posts List Api] load all fail',
  props<{error: any}>()
);
