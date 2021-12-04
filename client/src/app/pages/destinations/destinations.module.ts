import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationsComponent } from './destinations.component';
import { DestinationsRoutingModule } from './home-routing.module';
import { SingleTourComponent } from './single-tour/single-tour.component';



@NgModule({
  declarations: [
    DestinationsComponent,
    SingleTourComponent
  ],
  imports: [
    CommonModule,
    DestinationsRoutingModule
  ]
})
export class DestinationsModule { }
