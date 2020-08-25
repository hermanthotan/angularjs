import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-training-a',
  templateUrl: './training-a.component.html',
  styleUrls: ['./training-a.component.scss']
})
export class TrainingAComponent implements OnInit {

  firstNameObj = {
    name: ''
  };

  @Output("onAChange") onTextChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    // this.firstNameObj.name = 'test 1';
  }

  onInputChange(ev) {
    this.onTextChange.emit(this.firstNameObj);
  }

}
