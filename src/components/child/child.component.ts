import { Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit ,OnChanges {

  name : any = 'shubham'
  @Input()  test : any

  ngOnChanges(change: SimpleChanges){
    console.log(change,'test')

  }

  ngOnInit(): void {

    console.log(this.test,'test')
    
  }

}
