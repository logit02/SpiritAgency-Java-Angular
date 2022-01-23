import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationsComponent } from './destinations.component';
import { SingleTourComponent } from './single-tour/single-tour.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'',
        component:DestinationsComponent,
      },
      {
        path: ':id',
        component: SingleTourComponent
      }
    ]
  }
];


@NgModule({
  declarations: [
    DestinationsComponent,
    SingleTourComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    [RouterModule.forChild(routes)],
  ],
  providers: [
    HttpClientModule,
  ]
})
export class DestinationsModule { }
