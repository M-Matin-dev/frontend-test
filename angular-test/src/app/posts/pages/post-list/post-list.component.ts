import { Component, OnInit } from '@angular/core';
import {PostsFacade} from '../../store/posts.facade';

@Component({
  selector: 'talos-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor(public postsFacade: PostsFacade) { }

  ngOnInit(): void {
    console.log('list');
  }

}
