import {Component, Input, OnInit} from '@angular/core';
import {ButtonContentTypes, IButtonStateProps} from '../../models';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'talos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  readonly hoverStateOfAddButton: IButtonStateProps = {
    type: ButtonContentTypes.text,
    contents: 'Add new post',
  };

  readonly isInCreatePostPage: Observable<boolean>;

  @Input() title = 'Talos technical test';

  constructor(private router: Router) {
    this.isInCreatePostPage = this.router.events.pipe(
      filter((navigationEvent: RouterEvent) => navigationEvent instanceof NavigationEnd),
      map((navigationEndEvent: NavigationEnd) => navigationEndEvent.url === '/posts/create'),
    );
  }

  ngOnInit(): void {
  }

  navigateToCreatePost(): void {
    this.router.navigate(['posts/create']);
  }
}
