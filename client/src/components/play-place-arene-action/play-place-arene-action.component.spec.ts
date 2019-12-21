/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlayPlaceAreneActionComponent } from './play-place-arene-action.component';

describe('PlayPlaceAreneActionComponent', () => {
  let component: PlayPlaceAreneActionComponent;
  let fixture: ComponentFixture<PlayPlaceAreneActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayPlaceAreneActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayPlaceAreneActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
