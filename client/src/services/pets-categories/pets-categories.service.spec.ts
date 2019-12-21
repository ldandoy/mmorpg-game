/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PetsCategoriesService } from './pets-categories.service';

describe('Service: PetsCategories', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetsCategoriesService]
    });
  });

  it('should ...', inject([PetsCategoriesService], (service: PetsCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
