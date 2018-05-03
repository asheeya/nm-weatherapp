import { Component, OnInit } from '@angular/core';
import { WeatherserviceService } from '../weatherservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

location={
	city:'franklin',
	country:'us'
};

weather:any;
value:any;

  constructor(private _weatherService:WeatherserviceService) {


  }

  ngOnInit() {
  	this.value=localStorage.getItem('location');
  	if(this.value!= null){
  	this.location = JSON.parse(this.value);
  	}
  	else{
  		this.location={
		city:'franklin',
		country:'us'
		};
  	}
   	this._weatherService.getWeather(this.location.city,this.location.country).subscribe((response)=>{
    console.log(response);
this.weather=response;
   })
  }

}
