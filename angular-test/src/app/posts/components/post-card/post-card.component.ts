import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../../models/posts';

@Component({
  selector: 'talos-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() post: IPost;

  constructor() { }

  ngOnInit(): void {
  }

  get image(): string {
    return (this.post.photoUrl ? `http://127.0.0.1:3000/${this.post.photoUrl}` : false) || '/assets/images/placeholder.png';
  }

  get title(): string {
    return this.post.title;
  }

  get description(): string {
    return this.post.description;
  }

  get tags(): string[] {
    return this.post.tags;
  }

}
