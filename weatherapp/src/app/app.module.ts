import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { WeatherserviceService } from './weatherservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [WeatherserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
