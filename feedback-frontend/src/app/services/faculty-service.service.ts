import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FacultySubjects } from '../class/FacultySubjects/faculty-subjects';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  private baseURL = "../../assets/data.json";
  private getURL = "http://localhost:8080/facultySubjects";
  private postURL = "http://localhost:8080/facultyReview";

  constructor(private http: HttpClient) { }

  getFacultySubjects(data: any): Observable<FacultySubjects[]> {
    return this.http.get<FacultySubjects[]>(`${this.getURL}/${data}`);
  }

  getJSON(): Observable<FacultySubjects[]> {
    return this.http.get<FacultySubjects[]>(`${this.baseURL}`);
  }

  facultyReview(data: any): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.postURL}`, data, { headers, responseType: 'text' });
  } 

}
