import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {withLatestFrom, filter, mapTo} from 'rxjs/operators';
import * as routerAction from '@ngrx/router-store';
import {POSTS_MODULE_ROUTE} from '../../../../models/constants';
import {PostsFacade} from '../posts.facade';
import {RouterNavigatedAction} from '@ngrx/router-store';

import * as PostsApiActions from '../actions/post-list-api.actions';

@Injectable()
export class PostsRouterEffects {

  initialLoadOfPostList$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerAction.ROUTER_NAVIGATED),
        withLatestFrom(this.postsFacade.initialListLoad$),
        filter( ([navigationAction, initialListLoad]) =>
          !initialListLoad && (navigationAction as RouterNavigatedAction).payload.routerState.url === (`/${POSTS_MODULE_ROUTE}`)
        ),
        mapTo(PostsApiActions.loadAll()),
      )
  );

  constructor(private actions$: Actions, private postsFacade: PostsFacade) {
  }

}
