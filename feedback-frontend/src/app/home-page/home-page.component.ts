import { Component } from '@angular/core';
import { FacultyService } from '../services/restAPI/faculty-service.service';
import { DialogService } from '../services/general/dialog-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(private facultyService: FacultyService, public service: DialogService) {}

  fy: string = "fymca";
  sy: string = "symca";

  ngOnInit(): void {
  }

}
