import {createSelector} from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromPostList from '../reducers/post-list.reducer';

const getPostListState = createSelector(
  fromFeature.getPostsState,
  (state: fromFeature.PostsState) => state.postList
);

export const getLoading = createSelector(
  getPostListState,
  fromPostList.getLoading
);

export const getLoadError = createSelector(
  getPostListState,
  fromPostList.getLoadError
);

export const getPosts = createSelector(
  getPostListState,
  fromPostList.getPosts
);

export const getPostIds = createSelector(
  getPostListState,
  fromPostList.getPostIds
);

export const getPostsCount = createSelector(
  getPostListState,
  fromPostList.getPostsCount
);

export const getInitialListLoad = createSelector(
  getPostListState,
  fromPostList.getInitialListLoad
);
