import { async, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import {MatIconModule} from '@angular/material/icon';
import {ButtonContentTypes} from '../../../../models';
import {TestUtil} from '../../../../utils/test/test-util';

fdescribe('ButtonComponent', () => {
  let testUtil: TestUtil<ButtonComponent>;

  const addHoverState = () => {
    testUtil.component.hoverState = {
      type: ButtonContentTypes.text,
      contents: 'Add new post',
    };
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent ],
      imports: [MatIconModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testUtil = new TestUtil(ButtonComponent);
    testUtil.fixture.detectChanges();
  });

  it('should call onMouseEnter', () => {
    const onMouseEnterSpy = spyOn(testUtil.component, 'onMouseEnter');
    testUtil.fixture.nativeElement.dispatchEvent(new MouseEvent('mouseenter', {
      view: window,
      bubbles: true,
      cancelable: true
    }));
    testUtil.fixture.detectChanges();
    expect(onMouseEnterSpy).toHaveBeenCalled();
  });

  it('should call onMouseLeave', () => {
    const onMouseLeaveSpy = spyOn(testUtil.component, 'onMouseLeave');
    testUtil.fixture.nativeElement.dispatchEvent(new MouseEvent('mouseleave', {
      view: window,
      bubbles: true,
      cancelable: true
    }));
    testUtil.fixture.detectChanges();
    expect(onMouseLeaveSpy).toHaveBeenCalled();
  });

  it('should not add hover class if has no hover state', () => {
    testUtil.component.onMouseEnter();
    testUtil.fixture.detectChanges();
    expect(testUtil.getElemByTestId('button').classList.contains('is-hovered')).toBeFalse();
  });

  it('should add hover class', () => {
    addHoverState();
    testUtil.component.onMouseEnter();
    testUtil.fixture.detectChanges();
    expect(testUtil.getElemByTestId('button').classList.contains('is-hovered')).toBeTrue();
  });
});
