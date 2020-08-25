import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { SharedComponent } from './shared/shared.component';
import { ChildRouteComponent } from './child-route/child-route.component';
import { RouterModule } from '@angular/router';
import {ChildDataService} from './child-route/child-data.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SharedComponent, ChildRouteComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ChildDataService
  ],
  exports: [
    SharedComponent,
    ChildRouteComponent
  ]
})
export class CommonTrainingModule { }
