import { Injectable } from '@angular/core';
import {SwUpdate} from "@angular/service-worker";

@Injectable({
  providedIn: 'root'
})
export class PwaServiceService {

  constructor(
    private _swUpdate: SwUpdate
  ) {

  }
}
