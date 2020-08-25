import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'training';
  proB = 'test B...';

  constructor(private router: Router) {}

  changeB(ev) {

    this.proB = ev.name;
  }

  gotoShared() {

    this.router.navigate(['/synoptic/testButton']);
  }
}
