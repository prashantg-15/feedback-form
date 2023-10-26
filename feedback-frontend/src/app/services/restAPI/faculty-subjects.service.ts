import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FacultySubjects } from 'src/app/class/FacultySubjects/faculty-subjects';

@Injectable({
  providedIn: 'root'
})
export class FacultySubjectsService {

  private baseURL = "http://localhost:8080/facultySubjectController/facultySubjects";
  private baseURL2 = "http://localhost:8080/facultySubjectController/facultyNames";
  constructor(private httpClient: HttpClient) { }
  
  getFacultySubjectsList(): Observable<FacultySubjects[]>{
    return this.httpClient.get<FacultySubjects[]>(`${this.baseURL}`);
  }

  createFacultySubjects(facultySubjects: FacultySubjects): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, facultySubjects);
  }

  getFacultySubjectsById(id: number): Observable<FacultySubjects>{
    return this.httpClient.get<FacultySubjects>(`${this.baseURL}/${id}`);
  }

  updateFacultySubjects(id: number, facultySubjects: FacultySubjects): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, facultySubjects);
  }

  deleteFacultySubjects(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getFacultyNameList(): Observable<String[]>{
    return this.httpClient.get<any[]>(`${this.baseURL2}`);
  }
}
