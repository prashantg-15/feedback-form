import { Component } from '@angular/core';
import { FacultyService } from '../services/faculty-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(private facultyService: FacultyService) {}

  fy: string = "fymca";
  sy: string = "symca";

  ngOnInit(): void {
  }

}
