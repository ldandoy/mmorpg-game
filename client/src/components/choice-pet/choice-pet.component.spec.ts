import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoicePetComponent } from './choice-pet.component';

describe('ChoicePetComponent', () => {
  let component: ChoicePetComponent;
  let fixture: ComponentFixture<ChoicePetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoicePetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoicePetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
