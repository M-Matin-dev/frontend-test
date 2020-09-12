import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';

import * as fromReducers from './reducers';
import * as postListSelectors from './selectors/post-list.selectors';
import * as postListApiAction from './actions/post-list-api.actions';
import * as createPostApiAction from './actions/create-post-api.actions';
import {map} from 'rxjs/operators';
import {ICreatePost} from '../../../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsFacade {

  constructor(private store: Store<fromReducers.PostsState>) {
  }

  loading$ = this.store.pipe(select(postListSelectors.getLoading));
  loadError$ = this.store.pipe(select(postListSelectors.getLoadError));
  postsMap$ = this.store.pipe(select(postListSelectors.getPosts));
  posts$ = this.postsMap$.pipe(map(posts => Object.values(posts)));
  postIds$ = this.store.pipe(select(postListSelectors.getPostIds));
  postsCount$ = this.store.pipe(select(postListSelectors.getPostsCount));
  initialListLoad$ = this.store.pipe(select(postListSelectors.getInitialListLoad));

  loadPosts(): void {
    this.store.dispatch(postListApiAction.loadAll());
  }

  createPost({post, photo}: {post: ICreatePost, photo: File}): void {
    this.store.dispatch(createPostApiAction.createPost({post, photo}));
  }

}
