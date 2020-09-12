import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {IPost, ILoadState, LOAD_STATE_LOADED, LOAD_STATE_LOADING} from '../../../../models';
import {Action, createReducer, on} from '@ngrx/store';

import * as postListApiActions from '../actions/post-list-api.actions';

export interface State extends EntityState<IPost>, ILoadState {
  initialListLoad: boolean;
}

export const adapter: EntityAdapter<IPost> = createEntityAdapter<IPost>({});

export const initialState: State = adapter.getInitialState({
  ...LOAD_STATE_LOADED,
  initialListLoad: false,
});

export const postListReducer = createReducer(
  initialState,
  on(postListApiActions.loadAll, (state) => ({...state, ...LOAD_STATE_LOADING})),
  on(postListApiActions.loadAllSuccess, (state, {posts}) =>
    ({...adapter.setAll(posts, state), ...LOAD_STATE_LOADED, initialListLoad: true})),
  on(postListApiActions.loadAllFail, (state, {error}) =>
    ({...state, ...LOAD_STATE_LOADED, loadError: error})),
);

export function reducer(state: State | undefined, action: Action): State {
  return postListReducer(state, action);
}

export const {
  selectEntities: getPosts,
  selectIds: getPostIds,
  selectTotal: getPostsCount,
} = adapter.getSelectors();

export const getLoading = (state: State) => state.loading;
export const getLoadError = (state: State) => state.loadError;
export const getInitialListLoad = (state: State) => state.initialListLoad;
