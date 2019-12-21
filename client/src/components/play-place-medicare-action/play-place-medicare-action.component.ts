import { Component, OnInit, Input, Output, EventEmitter   } from '@angular/core';
import { Location } from '@angular/common';

import { UserService } from 'src/services/user/user.service';

import { Pet } from 'src/models/pet';

@Component({
  selector: 'app-play-place-medicare-action',
  templateUrl: './play-place-medicare-action.component.html',
  styleUrls: ['./play-place-medicare-action.component.css']
})
export class PlayPlaceMedicareActionComponent implements OnInit {

  @Input() selectedPet: Pet;
  @Input() pets: Pet[];
  @Input() wasClicked: boolean[];

  @Output() selectedPetChanged: EventEmitter<Pet> =   new EventEmitter();

  constructor(private userService: UserService, private location: Location) { }

  ngOnInit() {
  }

  treat = () => {
    if (this.selectedPet != null) {
      this.userService.treatPet(this.selectedPet.id)
        .subscribe(
          res => {
            this.pets.forEach( (pet: Pet, index) => {
              if (pet.id === res.id) {
                this.pets[index] = res;
              }
            });
            this.wasClicked[this.selectedPet.id] = !this.wasClicked[this.selectedPet.id];
            this.selectedPet = null;
            this.selectedPetChanged.emit(this.selectedPet);
          },
          err => { console.error(err); }
        );
    }
  }

  goBack(): void {
    this.location.back();
  }

}
