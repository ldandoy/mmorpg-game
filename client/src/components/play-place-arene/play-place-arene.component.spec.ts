/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlayPlaceAreneComponent } from './play-place-arene.component';

describe('PlayPlaceAreneComponent', () => {
  let component: PlayPlaceAreneComponent;
  let fixture: ComponentFixture<PlayPlaceAreneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayPlaceAreneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayPlaceAreneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
