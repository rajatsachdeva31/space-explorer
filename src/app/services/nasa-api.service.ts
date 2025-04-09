import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NasaApiService {
  private apiKey = 'n0P74N3KLaSCP1EaOPNQicmHrUJLndCSvN20qQrM';
  private apodUrl = 'https://api.nasa.gov/planetary/apod';

  constructor(private http: HttpClient) {}

  getApod(): Observable<any> {
    return this.http.get(`${this.apodUrl}?api_key=${this.apiKey}&count=10`);
  }
}