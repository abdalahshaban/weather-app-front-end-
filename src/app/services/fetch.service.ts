import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  readonly BASEURL = `api`
  constructor(private http: HttpClient) { }

  getWeatherServ(city): Observable<any> {
    return this.http.post(this.BASEURL, { city })
  }
}
