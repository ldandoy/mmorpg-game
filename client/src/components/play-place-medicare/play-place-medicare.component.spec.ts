/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlayPlaceMedicareComponent } from './play-place-medicare.component';

describe('PlayPlaceMedicareComponent', () => {
  let component: PlayPlaceMedicareComponent;
  let fixture: ComponentFixture<PlayPlaceMedicareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayPlaceMedicareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayPlaceMedicareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
