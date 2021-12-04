import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
//import { NavigationComponent } from './navigation/navigation.component';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { BlogComponent } from './blog/blog.component';
import { StepsComponent } from './steps/steps.component';

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
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
