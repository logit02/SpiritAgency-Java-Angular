import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {ITour} from "../../models/tour.model";
import {TourService} from "../../services/tour.service";

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
  id=4;
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
