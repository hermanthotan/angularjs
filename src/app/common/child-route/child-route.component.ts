import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChildDataService } from './child-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child-route',
  templateUrl: './child-route.component.html',
  styleUrls: ['./child-route.component.scss']
})
export class ChildRouteComponent implements OnInit, OnDestroy {

  public data = [];

  private dataSubscription: Subscription;

  constructor(private dataService: ChildDataService) { }

  ngOnInit(): void {

    this.dataSubscription = this.dataService.getData()
      .subscribe(res => {

        this.data = res;
      });
  }

  ngOnDestroy(): void {

    this.dataSubscription.unsubscribe();
  }

}
