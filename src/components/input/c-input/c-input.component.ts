import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-c-input',
  templateUrl: './c-input.component.html',
  styleUrls: ['./c-input.component.css']
})
export class CInputComponent {
  inputData: any;

  @Output() string1 = new EventEmitter<any>()

  onClick(value:any){
    console.log(value,'ert')
    this.string1.emit(value)
  }

}
