import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPost} from '../../../../models/posts';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'talos-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() post: IPost;
  @Output() clickedView = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  get image(): string {
    return (this.post.photoUrl ? `${environment.apiBaseUrl}/${this.post.photoUrl}` : false) || '/assets/images/placeholder.png';
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
