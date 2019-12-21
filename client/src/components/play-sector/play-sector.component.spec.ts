/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlaySectorComponent } from './play-sector.component';

describe('PlaySectorComponent', () => {
  let component: PlaySectorComponent;
  let fixture: ComponentFixture<PlaySectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaySectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaySectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
