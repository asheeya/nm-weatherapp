import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class WeatherserviceService {
url;

  constructor(private http:Http) {
  		this.url='http://localhost:3000/api/?city=';
   }


   getWeather(city,country){

   return this.http.get(this.url+city+','+country).map((res) => res.json());

   }

}
