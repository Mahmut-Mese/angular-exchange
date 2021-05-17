import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExApiService {
  private host = 'https://api.exchangerate-api.com/v4/latest/GBP';

  constructor(private http: HttpClient) {}
  getAllitems() {
    return this.http.get(this.host);
  }
}
