import {Component, Input, OnInit} from '@angular/core';
import {ButtonContentTypes, IButtonStateProps} from '../../models';
import {Router} from '@angular/router';

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

  @Input() title = 'Talos technical test';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCreatePost(): void {
    this.router.navigate(['posts/create']);
  }
}
