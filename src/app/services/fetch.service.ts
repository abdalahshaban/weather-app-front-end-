import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  readonly BASEURL = `http://localhost:5000/api`
  constructor(private http: HttpClient) { }

  getWeatherServ(city): Observable<any> {
    return this.http.post(this.BASEURL, { city })
  }
}
