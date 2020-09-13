import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import * as postListApiActions from '../actions/post-list-api.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {PostsService} from '../../services/posts.service';
import {of} from 'rxjs';

@Injectable()
export class PostsApiEffects {

  loadPosts$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(postListApiActions.loadAll),
        switchMap(() => this.postsService.getPosts()),
        map(posts => postListApiActions.loadAllSuccess({posts}) ),
        catchError((err) => of( postListApiActions.loadAllFail(err)))
      )
  );

  constructor(private actions$: Actions, public postsService: PostsService) {
  }
}
