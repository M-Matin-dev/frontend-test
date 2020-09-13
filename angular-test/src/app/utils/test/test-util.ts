import {Type} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';


export class TestUtil<COMPONENT_TYPE> {

  private readonly _fixture: ComponentFixture<COMPONENT_TYPE>;
  private readonly _component: COMPONENT_TYPE;

  constructor(componentType: Type<COMPONENT_TYPE>) {
    this._fixture = TestBed.createComponent(componentType);
    this._component = this._fixture.componentInstance;
  }

  get fixture(): ComponentFixture<COMPONENT_TYPE> {
    return this._fixture;
  }

  get component(): COMPONENT_TYPE {
    return this._component;
  }

  getElemByTestId<ELEMENT_TYPE extends HTMLElement>(testId: string): ELEMENT_TYPE {
    return this._fixture.nativeElement.querySelector(`[testId="${testId}"]`);
  }

}
