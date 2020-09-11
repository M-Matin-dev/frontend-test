import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'talos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title = 'Talos technical test';

  constructor() { }

  ngOnInit(): void {
  }

}
