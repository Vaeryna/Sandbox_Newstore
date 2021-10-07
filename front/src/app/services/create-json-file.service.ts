import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/text',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CreateJsonFileService {
  url = '//localhost:3000';

  constructor(private http: HttpClient) {
  }

  createStore(data: any) {
    return this.http.post(`${this.url}/createStore`, data);
  }

}
