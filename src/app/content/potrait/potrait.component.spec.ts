/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PotraitComponent } from './potrait.component';

describe('PotraitComponent', () => {
  let component: PotraitComponent;
  let fixture: ComponentFixture<PotraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotraitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
