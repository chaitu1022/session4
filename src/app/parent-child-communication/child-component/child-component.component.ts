import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {


@Input() all: number = 0;
@Input() male: number = 0;
@Input() female: number = 0;

@Output() radioButtonChange: EventEmitter<string> = new EventEmitter<string>();

  // @Output() radioButtonChange: EventEmitter<string> = new EventEmitter<string>();

 selectedInput: string = "all";

 sendDataToParent() {
  this.radioButtonChange.emit(this.selectedInput);
 }

  // sendDataToParent() {
  //   this.radioButtonChange.emit(this.selectedInput);
  // }

}
