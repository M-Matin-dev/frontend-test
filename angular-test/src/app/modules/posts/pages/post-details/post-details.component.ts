import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {catchError, filter, map} from 'rxjs/operators';
import {of, Subscription} from 'rxjs';
import {IPost} from '../../../../models/posts';
import {PostsService} from '../../services/posts.service';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'talos-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit, OnDestroy {

  loading = false;
  loadError;
  post: IPost = null;

  private routeSub: Subscription;
  private loadSub: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private postsService: PostsService) {}

  private loadPost(postId: string): void {
    this.loading = true;
    this.loadError = false;
    this.post = null;
    this.unSubscribeFromLoadPost();

    this.loadSub = this.postsService.getPost({postId})
      .pipe(
        catchError(err => {
          this.loadPostFail(err);
          return of(null);
        }),
        filter(post => !!post),
        map((post: IPost) => ({...post, photoUrl: post.photoUrl ? environment.apiBaseUrl + '/' + post.photoUrl : null}))
      )
      .subscribe(post => this.loadPostSuccess(post));
  }

  private loadPostSuccess(post: IPost): void {
    this.loading = false;
    this.loadError = false;
    this.post = post;
  }

  private loadPostFail(err: any): void {
    this.loading = false;
    this.loadError = err;
    this.post = null;
  }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.paramMap.pipe(
      map(paramMap => paramMap.get('id')),
    ).subscribe(id => this.loadPost(id));
  }

  ngOnDestroy(): void {
    this.unSubscribeFromLoadPost();
    this.unSubscribeFromRouter();
  }

  private unSubscribeFromLoadPost(): void {
    if (this.loadSub) {
      this.loadSub.unsubscribe();
      this.loadSub = null;
    }
  }

  private unSubscribeFromRouter(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
      this.routeSub = null;
    }
  }

}
