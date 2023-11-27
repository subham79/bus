import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{

  formsData: any;

  ngOnInit(): void {
    this.formsData = new FormGroup({
      'user' : new FormControl(''),
      'password' : new FormControl(''),
    })
  }

  data(){
    console.log(this.formsData.value,'formsdara')
  }

}
