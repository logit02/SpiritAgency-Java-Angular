import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';



@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BlogComponent
  ]
})
export class BlogModule { }
