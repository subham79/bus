import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { name } from '../../constan/en'
import { LogonService } from '../services/logon.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnChanges {

  constructor(private router: Router, private  login : LogonService) { }
  @Input() data1: any
  @Input() subham: any

  forms1: any
  @Output() data = new EventEmitter<any>()

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngonchanes' )  
  }

  ngOnInit(): void {

    // console.log('login', this.login.getallApi().subscribe(x=>{
    //   console.log(x)
    // }))
    this.forms1 = new FormGroup({
      'name': new FormControl(''),
      'password': new FormControl('')
    })
  }

  onClick() {
    this.router.navigateByUrl('/home')
    this.forms1 = name.name

  }


}
