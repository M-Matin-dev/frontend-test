import { ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import * as fromPostList from './post-list.reducer';
import {MODULE_CONSTANTS} from '../../../../contstants/module-constants';

export {fromPostList};

export interface PostsState {
  postList: fromPostList.State;
}

export const postsFeatureReducers: ActionReducerMap<PostsState> = {
  postList: fromPostList.reducer,
};

export const getPostsState = createFeatureSelector<PostsState>(MODULE_CONSTANTS.Post.storeName);
