import {Component, HostListener, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ButtonContentTypes, IButtonStateProps} from '../../../../models';
import { isBrowser } from 'mobile-device-detect';

@Component({
  selector: 'talos-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  readonly buttonContentTypes = Object.freeze(ButtonContentTypes);
  readonly isBrowser = isBrowser;

  @Input() hoverState: IButtonStateProps;
  @Input() ariaLabel: string;

  @Output() clicked = new EventEmitter<MouseEvent>();

  isHovered = false;

  constructor() { }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.isHovered = this.isBrowser && !!this.hoverState;
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.isHovered = false;
  }

  ngOnInit(): void {
  }

}
