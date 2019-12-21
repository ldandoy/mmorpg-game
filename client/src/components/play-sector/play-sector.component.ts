import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/services/user/user.service';
import { SectorService } from 'src/services/sector/sector.service';

import { Sector } from '../../models/sector';
import { Place } from '../../models/place';

@Component({
  selector: 'app-play-sector',
  templateUrl: './play-sector.component.html',
  styleUrls: ['./play-sector.component.css']
})
export class PlaySectorComponent implements OnInit {

  sectorId = 1;
  sector: Sector;

  constructor(private router: Router, private userService: UserService, private sectorService: SectorService) { }

  ngOnInit() {
    this.userService.me()
      .subscribe(
        user => {
          if (user.pets.length <= 0) {
            this.router.navigate(['/choice-pet']);
          }
        },
        err => { console.error(err); }
      );

    this.sectorService.getSector(this.sectorId)
      .subscribe(
        sector => {
          this.sector = sector;
        },
        err => { console.error(err); }
      );
  }

  selectPlace = (place: Place) => {
    switch (place.placeCategoryId) {
      case 1:
        this.router.navigate(['/play-place-medicare/:id', {id: place.id}]);
        break;
      case 3:
        this.router.navigate(['/play-place-arene/:id', {id: place.id}]);
        break;
      default:
        alert('Type de lieux non définit !');
    }
  }

}
