import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';

import * as fromReducers from '../store/reducers';
import * as postListSelectors from './selectors/post-list.selectors';
import * as postListApiAction from './actions/post-list-api.actions';
import {map} from 'rxjs/operators';

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

}
