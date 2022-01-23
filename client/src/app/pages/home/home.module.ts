import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule, Routes} from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { BlogComponent } from './blog/blog.component';
import { StepsComponent } from './steps/steps.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    LandingPageComponent,
    SpecialOffersComponent,
    BlogComponent,
    StepsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    [RouterModule.forChild(routes)],
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
