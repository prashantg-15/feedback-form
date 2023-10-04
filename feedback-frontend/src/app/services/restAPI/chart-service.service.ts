import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private baseURL = 'http://localhost:3000';
  private URL = "../../assets/chart.json";

  constructor(private http: HttpClient) {}

  getJSON(): Observable<any[]> {
    return this.http.get<any[]>(`${this.URL}`);
  }

  q1(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/${'q1'}`);
  }

  q2(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/${'q2'}`);
  }

  q3(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/${'q2'}`);
  }

  q4(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/${'q2'}`);
  }

  q5(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/${'q2'}`);
  }

  q6(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/${'q2'}`);
  }

  q7(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/${'q2'}`);
  }

  q8(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/${'q2'}`);
  }

  q9(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/${'q2'}`);
  }

  q10(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/${'q2'}`);
  }
  
}
