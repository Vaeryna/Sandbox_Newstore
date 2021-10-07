import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class CookiesService {
  url = '//localhost:3000';

  constructor(private http: HttpClient) {

  }

  setCookie(data: any) {
    console.log("fonction setCookie FRONT");

    // return this.http.get(`localhost:3000/setCookie`);
    return this.http.post(`${this.url}/setCookie`, data);
  }
}
