import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { FacultySubjects } from 'src/app/class/FacultySubjects/faculty-subjects';
import { FacultySubjectsService } from 'src/app/services/restAPI/faculty-subjects.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-list-faculty-subjects',
  templateUrl: './list-faculty-subjects.component.html',
  styleUrls: ['./list-faculty-subjects.component.scss'],
  providers: [MessageService]
})

export class ListFacultySubjectsComponent {

  facultySubjects!: FacultySubjects[];
  loading: boolean = true;
  selectedfacultySubjects!: FacultySubjects;

  @ViewChild('dt') dt: Table | undefined;
  
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  constructor(private messageService: MessageService, private facultySubjectsService: FacultySubjectsService,
    private router: Router) { }

  ngOnInit(): void {
    this.getList();
    this.loading = false;
  }

  private getList(){
    this.facultySubjectsService.getFacultySubjectsList().subscribe(data => {
      this.facultySubjects = data;
    });
  }

  employeeDetails(id: number){
    this.router.navigate(['view-FacultySubjects', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update-FacultySubjects', id]);
  }

  deleteEmployee(id: number){
    this.facultySubjectsService.deleteFacultySubjects(id).subscribe( data => {
      console.log(data);
      this.showTopCenter();
      this.getList();
    })
  }

  showTopCenter() {
    this.messageService.add({ key: 'tc', severity: 'error', summary: 'Deleted', detail: 'Faculty Subject Deleted Successfully' });
  }
}
