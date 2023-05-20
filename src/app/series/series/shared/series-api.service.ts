
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeriesApiService {
  PUBLIC_KEY = '';
  HASH = ''; 
  URL_API = `https://w6cuzgik26qcpcwuvla6nroloy0znrmp.lambda-url.us-west-2.on.aws/
  `;
 
  constructor( private http: HttpClient) { }

  getAllSeries () : Observable<any>{
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any)=>data.data.results))
  }
}
