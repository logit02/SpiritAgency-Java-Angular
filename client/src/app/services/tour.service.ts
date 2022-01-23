import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Location} from "@angular/common";
import {environment} from "../../environments/environment";
import {ITour, ITourimages} from "../models/tour.model";

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(
    private _httpClient: HttpClient,
  ) { }

  getTourById(id: Number){
    const url = Location.joinWithSlash(
      environment.baseURL || '', `/tours/${id}`
    )
    return this._httpClient.get<ITour>(url);
  }

  getAllTours(){
    const url = Location.joinWithSlash(
      environment.baseURL || '', '/tours'
    )
    return this._httpClient.get<ITour[]>(url);
  }

  getImagesByTourId(id: Number){
    const url = Location.joinWithSlash(
      environment.baseURL || "", `/tours/images/${id}`
    )
    return this._httpClient.get<ITourimages[]>(url);
  }
}
