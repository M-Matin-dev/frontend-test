import { Component, OnInit } from '@angular/core';
import {PostsFacade} from '../../store/posts.facade';
import {Router} from '@angular/router';
import {POSTS_MODULE_ROUTE} from '../../../../models/constants';

@Component({
  selector: 'talos-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor(public postsFacade: PostsFacade, private router: Router) { }

  ngOnInit(): void {
  }

  goToDetailPage(postId: string): void {
    console.log({postId});
    this.router.navigate([POSTS_MODULE_ROUTE, postId]);
  }

}
