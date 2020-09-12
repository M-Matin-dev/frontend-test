import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPost} from '../../../../models/posts';
import {API_BASE_URL} from '../../../../models/constants';

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
    return (this.post.photoUrl ? `${API_BASE_URL}/${this.post.photoUrl}` : false) || '/assets/images/placeholder.png';
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
