import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-training-b',
  templateUrl: './training-b.component.html',
  styleUrls: ['./training-b.component.scss']
})
export class TrainingBComponent implements OnInit {

  @Input('firstName') fName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
