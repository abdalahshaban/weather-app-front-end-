import { FetchService } from './services/fetch.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  SearchForm: FormGroup
  errorMessage: String;
  showSpinner: Boolean = false
  weatherData: any

  constructor(private fetchServ: FetchService, private fb: FormBuilder) { }

  ngOnInit() {
    this.init()
  }

  init() {
    this.SearchForm = this.fb.group({
      cityName: ['', Validators.required],
    })
  }

  getWeather() {
    console.log(this.SearchForm.value.cityName);
    this.errorMessage = null
    this.showSpinner = true
    this.fetchServ.getWeatherServ(this.SearchForm.value.cityName).subscribe(data => {
      this.showSpinner = false
      if (data.message.cod === "404") {
        console.log(data);
        this.errorMessage = data.message.message
      }
      else {
        console.log(data);
        this.SearchForm.reset()
        this.weatherData = data.message
      }
    })
  }

  covertTime(value) {
    return moment(new Date(value).toUTCString()).format('LLLL');
  }
}
