import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PetsCategoriesService } from 'src/services/pets-categories/pets-categories.service';
import { UserService } from 'src/services/user/user.service';
import { PetCategory } from '../../models/pet-category';

@Component({
  selector: 'app-choice-pet',
  templateUrl: './choice-pet.component.html',
  styleUrls: ['./choice-pet.component.css']
})
export class ChoicePetComponent implements OnInit {

  petCategories: PetCategory[];

  petData = {
    name: '',
    PetCategoryId: null
  };

  constructor(private router: Router, private PetsCategoriesServices: PetsCategoriesService, private userService: UserService) { }

  ngOnInit() {
    this.userService.me()
      .subscribe(
        user => {
          if (user.pets.length > 0) {
            this.router.navigate(['/play-sector']);
          }
        },
        err => { console.error(err); }
      );


    this.PetsCategoriesServices.all()
      .subscribe(
        petsCategories => {
          this.petCategories = petsCategories;
        },
        err => { console.error(err); }
      );
  }

  choicePet = () => {
    this.userService.addPet(this.petData).subscribe(
      res => { console.error(res); },
      err => { console.error(err); }
    );
  }

  selectPetCategory = (petCategory) => {
    // console.log(petCategory);
    this.petData.PetCategoryId = petCategory.id;
  }

}
