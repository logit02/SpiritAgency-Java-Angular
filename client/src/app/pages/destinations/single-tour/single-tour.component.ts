import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {TourService} from "../../../services/tour.service";
import {ITour, ITourimages} from "../../../models/tour.model";

@Component({
  selector: 'app-single-tour',
  templateUrl: './single-tour.component.html',
  styleUrls: ['./single-tour.component.scss']
})
export class SingleTourComponent implements OnInit {

  tripId: number;
  tripImages: ITourimages[];
  tour: ITour;
  constructor(
    private _router:Router,
    private _tourService: TourService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.tripId= Number(this.route.snapshot.paramMap.get('id'));
    this._tourService.getTourById(this.tripId).subscribe(data =>{
     this.tour = data;
    })
    this._tourService.getImagesByTourId(this.tripId).subscribe(data => {
      this.tripImages = data;
    })
  }

}
