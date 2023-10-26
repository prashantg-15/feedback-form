import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacultySubjects } from 'src/app/class/FacultySubjects/faculty-subjects';
import { DialogService } from 'src/app/services/general/dialog-service.service';
import { FacultySubjectsService } from 'src/app/services/restAPI/faculty-subjects.service';

@Component({
  selector: 'app-details-faculty-subjects',
  templateUrl: './details-faculty-subjects.component.html',
  styleUrls: ['./details-faculty-subjects.component.scss']
})
export class DetailsFacultySubjectsComponent {

  id!: number; 
  facultySubjects!: FacultySubjects;
  constructor(private route: ActivatedRoute,  public service: DialogService, private router: Router, private facultySubjectsService: FacultySubjectsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.facultySubjects = new FacultySubjects();
    this.facultySubjectsService.getFacultySubjectsById(this.id).subscribe( data => {
      this.facultySubjects = data;
      console.log(this.facultySubjects);
    });
  }
  goBack(){
    this.router.navigate(['/facultySubjectsList']);
  }
}
