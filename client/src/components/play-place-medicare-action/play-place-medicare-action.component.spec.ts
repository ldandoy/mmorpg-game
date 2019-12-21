/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlayPlaceMedicareActionComponent } from './play-place-medicare-action.component';

describe('PlayPlaceMedicareActionComponent', () => {
  let component: PlayPlaceMedicareActionComponent;
  let fixture: ComponentFixture<PlayPlaceMedicareActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayPlaceMedicareActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayPlaceMedicareActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
