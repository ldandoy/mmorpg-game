import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { UserService } from 'src/services/user/user.service';
import { PlaceService } from 'src/services/place/place.service';

import { User } from 'src/models/user';
import { Place } from 'src/models/place';

@Component({
  selector: 'app-play-place-arene',
  templateUrl: './play-place-arene.component.html',
  styleUrls: ['./play-place-arene.component.css']
})
export class PlayPlaceAreneComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private placeService: PlaceService
  ) { }

  user: User  = new User();
  place: Place = new Place();
  placeId = null;
  users: User[] = [];
  wasClicked: boolean[] = [];
  selectedUser: User = null;

  ngOnInit() {
    this.placeId = +this.route.snapshot.paramMap.get('id');

    this.userService.me()
      .subscribe(
        user => {
          if (user.pets.length <= 0) {
            this.router.navigate(['/choice-pet']);
          }

          this.user = user;

          this.placeService.getPlace(this.placeId)
            .subscribe(
              place => {
                this.place = place;
              },
              err => { console.error(err); }
            );

          this.userService.all()
            .subscribe(
              users => {
                this.users = users;

                this.users.forEach( (user: User) => {
                  this.wasClicked.splice(user.id, 0, false);
                });
              },
              err => { console.error(err); }
            );
        },
        err => { console.error(err); }
      );
  }

  selectUser = (selectUser: User) => {
    this.users.forEach( (user: User) => {
      if (user.id !== selectUser.id) {
        this.wasClicked[user.id] = false;
      }
    });

    this.wasClicked[selectUser.id] = !this.wasClicked[selectUser.id];

    if (this.wasClicked[selectUser.id] === false) {
      this.selectedUser = null;
    } else {
      this.selectedUser = selectUser;
    }
  }

  selectedUserChangedHandler = (selectUser: User) => {
    this.selectedUser = selectUser;
  }

}
