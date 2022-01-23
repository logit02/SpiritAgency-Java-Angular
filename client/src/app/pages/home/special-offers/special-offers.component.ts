import { Component, OnInit } from '@angular/core';
import {TourService} from "../../../services/tour.service";
import {ITour} from "../../../models/tour.model";

@Component({
  selector: 'app-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.scss']
})
export class SpecialOffersComponent implements OnInit {

  tours: ITour[];
  constructor(
    private _tourService: TourService,
  ) { }

  ngOnInit(): void {
    this._tourService.getAllTours().subscribe(data => {
      this.tours = data;
    })
  }

}
