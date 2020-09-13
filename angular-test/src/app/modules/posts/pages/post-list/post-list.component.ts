import { Component, OnInit } from '@angular/core';
import {PostsFacade} from '../../store/posts.facade';
import {Router} from '@angular/router';
import {MODULE_CONSTANTS} from '../../../../contstants/module-constants';

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
    this.router.navigate([MODULE_CONSTANTS.Post.basePath, postId]);
  }

}
