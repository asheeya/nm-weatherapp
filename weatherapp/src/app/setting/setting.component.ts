import { Component, OnInit } from '@angular/core';
import { WeatherserviceService } from '../weatherservice.service';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

city:string
country:string

weather:any;

  constructor(private _weatherService:WeatherserviceService) {

}
  ngOnInit() {
  }

save(){
	
	if(this.country=="undefined"){
	this.country=" ";
	}
	if(this.city!=null){
	console.log('here')
	let location={
	city:this.city,
	country:this.country
		}
	
		localStorage.setItem('location',JSON.stringify(location));
		this._weatherService.getWeather(location.city,location.country).subscribe((response)=>{
    	console.log(response);
		this.weather=response;
		}
   )
}
}
}
