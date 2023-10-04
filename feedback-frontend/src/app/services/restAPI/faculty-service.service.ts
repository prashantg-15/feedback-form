import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FacultySubjects } from 'src/app/class/FacultySubjects/faculty-subjects';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  private baseURL = "../../assets/data.json";
  private getURL = "http://localhost:8080/facultySubjects";
  private postURL = "http://localhost:8080/facultyReview";
  private getSub = "http://localhost:8080/feedbackSummary";
  private chartURL = "../../assets/chart.json";
  private login = "http://localhost:8080/login";

  public feedbackTitle = [
    'Subject Knowledge',
    'Regularity and Punctuality',
    'Communication Skills',
    'Syllabus Coverage',
    'Interest generated in the subject',
    'Faculty Preparation',
    'Overall Acceptance',
    'Use of Effective teaching methods',
    'Faculty challenges you to think',
    'Encouragement by faculty to raise questions or make comments',
  ];

  constructor(private http: HttpClient) { }

  getFacultySubjects(className: any): Observable<FacultySubjects[]> {
    return this.http.get<FacultySubjects[]>(`${this.getURL}/${className}`);
  }

  getJSON(): Observable<FacultySubjects[]> {
    return this.http.get<FacultySubjects[]>(`${this.baseURL}`);
  }

  facultyReview(data: any): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.postURL}`, data, { headers, responseType: 'text' });
  }

  getSubject(faculty: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.getSub}/${faculty}`);
  }

  getFeedback(faculty:any, data: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.getSub}/${faculty}/${data}`);
  }

  getChart(): Observable<any[]> {
    return this.http.get<any[]>(`${this.chartURL}`);
  }

  getFeedbackTitle() {
    return this.feedbackTitle;
  }

  loginValidation(data: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.login}`, data, { headers, responseType: 'text' });
  }

}
