import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

import { User } from 'src/models/user';

@Component({
  selector: 'app-play-place-arene-action',
  templateUrl: './play-place-arene-action.component.html',
  styleUrls: ['./play-place-arene-action.component.css']
})
export class PlayPlaceAreneActionComponent implements OnInit {

  @Input() selectedUser: User;
  @Input() wasClicked: boolean[];

  @Output() selectedUserChanged: EventEmitter<User> = new EventEmitter();

  constructor(private location: Location, ) { }

  ngOnInit() {
  }

  fight = () => {
    if (this.selectedUser != null) {
      console.log(this.selectedUser);
    }
  }

  goBack(): void {
    this.location.back();
  }

}
