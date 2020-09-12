import { ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import * as fromPostList from './post-list.reducer';
import {POSTS_FEATURE_NAME} from '../../../../models/constants';

export {fromPostList};

export interface PostsState {
  postList: fromPostList.State;
}

export const postsFeatureReducers: ActionReducerMap<PostsState> = {
  postList: fromPostList.reducer,
};

export const getPostsState = createFeatureSelector<PostsState>(POSTS_FEATURE_NAME);
