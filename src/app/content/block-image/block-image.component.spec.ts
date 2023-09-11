/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlockImageComponent } from './block-image.component';

describe('BlockImageComponent', () => {
  let component: BlockImageComponent;
  let fixture: ComponentFixture<BlockImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
