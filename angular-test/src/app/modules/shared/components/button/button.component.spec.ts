import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import {MatIconModule} from '@angular/material/icon';
import {ButtonContentTypes} from '../../../../models';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  const addHoverState = () => {
    component.hoverState = {
      type: ButtonContentTypes.text,
      contents: 'Add new post',
    };
  };

  const getButtonElem = (): HTMLButtonElement => {
    return fixture.nativeElement.querySelector(`[testId="button"]`);
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent ],
      imports: [MatIconModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call onMouseEnter', () => {
    const onMouseEnterSpy = spyOn(component, 'onMouseEnter');
    fixture.nativeElement.dispatchEvent(new MouseEvent('mouseenter', {
      view: window,
      bubbles: true,
      cancelable: true
    }));
    fixture.detectChanges();
    expect(onMouseEnterSpy).toHaveBeenCalled();
  });

  it('should call onMouseLeave', () => {
    const onMouseLeaveSpy = spyOn(component, 'onMouseLeave');
    fixture.nativeElement.dispatchEvent(new MouseEvent('mouseleave', {
      view: window,
      bubbles: true,
      cancelable: true
    }));
    fixture.detectChanges();
    expect(onMouseLeaveSpy).toHaveBeenCalled();
  });

  it('should not add hover class if has no hover state', () => {
    component.onMouseEnter();
    fixture.detectChanges();
    expect(getButtonElem().classList.contains('is-hovered')).toBeFalse();
  });

  it('should add hover class', () => {
    addHoverState();
    component.onMouseEnter();
    fixture.detectChanges();
    expect(getButtonElem().classList.contains('is-hovered')).toBeTrue();
  });
});
