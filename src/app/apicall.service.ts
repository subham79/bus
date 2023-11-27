import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http : HttpClient) {


   }

   getallApi(){
    const url = 'https://app.legaciestechno.com/dcp/api/get_data.php?type=call_tracking&email=monica@fullertonhearing.com'
    return this.http.get(url)
   }
}
