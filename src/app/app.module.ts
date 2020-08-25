import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingAComponent } from './components/training-a/training-a.component';
import { TrainingBComponent } from './components/training-b/training-b.component';
import { RouterModule, Routes } from '@angular/router';
import { 
  CommonTrainingModule,
  SharedComponent,
  ChildRouteComponent
} from './common'

const routes: Routes = [
  {
    path: 'synoptic/:name',
    component: SharedComponent,
    children: [
      {
        path: 'child',
        component: ChildRouteComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TrainingAComponent,
    TrainingBComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    CommonTrainingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
