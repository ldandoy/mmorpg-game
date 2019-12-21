import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { UserService } from 'src/services/user/user.service';
import { PlaceService } from 'src/services/place/place.service';
import { PetService } from 'src/services/pet/pet.service';

import { User } from 'src/models/user';
import { Pet } from 'src/models/pet';
import { Place } from 'src/models/place';

@Component({
  selector: 'app-play-place-medicare',
  templateUrl: './play-place-medicare.component.html',
  styleUrls: ['./play-place-medicare.component.css']
})
export class PlayPlaceMedicareComponent implements OnInit {

  user: User  = new User();
  pets: Pet[] = [];
  selectedPet: Pet = null;
  place: Place = new Place();
  placeId = null;
  wasClicked: boolean[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private placeService: PlaceService,
    private petService: PetService
  ) { }

  ngOnInit() {
    this.placeId = +this.route.snapshot.paramMap.get('id');

    this.userService.me()
      .subscribe(
        user => {
          if (user.pets.length <= 0) {
            this.router.navigate(['/choice-pet']);
          }

          this.user = user;
          this.pets = this.user.pets;

          this.pets.forEach( (pet: Pet, index) => {
            this.wasClicked.splice(pet.id, 0, false);
          });

          this.placeService.getPlace(this.placeId)
            .subscribe(
              place => {
                this.place = place;
              },
              err => { console.error(err); }
            );
        },
        err => { console.error(err); }
      );
  }

  selectPet = (selectPet: Pet) => {
    this.pets.forEach( (pet: Pet) => {
      if (pet.id !== selectPet.id) {
        this.wasClicked[pet.id] = false;
      }
    });

    this.wasClicked[selectPet.id] = !this.wasClicked[selectPet.id];

    if (this.wasClicked[selectPet.id] === false) {
      this.selectedPet = null;
    } else {
      this.selectedPet = selectPet;
    }
  }

  selectedPetChangedHandler = (selectPet: Pet) => {
    this.selectedPet = selectPet;
  }

}
