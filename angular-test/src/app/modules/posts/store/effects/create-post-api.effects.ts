import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import * as createPostApiActions from '../actions/create-post-api.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {PostsService} from '../../services/posts.service';
import {of} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {MESSAGES} from '../../../../models/messages.en';
import {Router} from '@angular/router';
import {POSTS_MODULE_ROUTE} from '../../../../models/constants';

@Injectable()
export class CreatePostApiEffects {

  constructor(
    private actions$: Actions,
    private router: Router,
    private postsService: PostsService,
    private toastr: ToastrService
  ) {
  }

  createPosts$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createPostApiActions.createPost),
        switchMap(action =>
          this.postsService.createPost({post: action.post}).pipe(
            switchMap(post => this.postsService.uploadPictureOfPost({postId: post.id, file: action.photo}).pipe(
              catchError(() => {
                this.showUploadError();
                return of(post);
              })
            )),
          )
        ),
        map(post => createPostApiActions.createPostSuccess({post}) ),
        catchError((err) => {
          return of( createPostApiActions.createPostFail(err));
        })
      )
  );

  createPostsSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createPostApiActions.createPostSuccess),
        tap(() => {
          this.toastr.success(MESSAGES.success.createPost.create, MESSAGES.errors.default, {timeOut: 5000});
          this.router.navigate([POSTS_MODULE_ROUTE]);
        }),
      ),
    {dispatch: false}
  );

  createPostsFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createPostApiActions.createPostFail),
        tap(() => this.toastr.error(MESSAGES.errors.createPost.create, MESSAGES.errors.default, {timeOut: 5000})),
      ),
    {dispatch: false}
  );

  private showUploadError(): void {
    this.toastr.error(MESSAGES.errors.createPost.imageUpload, MESSAGES.errors.default, {
      timeOut: 5000,
    });
  }
}
