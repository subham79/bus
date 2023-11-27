import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SubService } from '../services/sub.service';

@Component({
  selector: 'app-output1',
  templateUrl: './output1.component.html',
  styleUrls: ['./output1.component.css']
})
export class Output1Component implements OnInit {

  constructor(public SubService : SubService){

  }

  @Output() dataEvent = new EventEmitter<any>()


  ngOnInit(): void {
    
  }

  dataPass(value:any){

    console.log(value,'event')
    this.dataEvent.emit(value)
    this.SubService.dataSend.next(value)
  }
}
