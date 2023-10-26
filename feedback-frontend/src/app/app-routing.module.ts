import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TeacherFeedbackComponent } from './teacher-feedback/teacher-feedback.component';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { FeedbackSummaryComponent } from './feedback-summary/feedback-summary.component';
import { authGuard } from './guard/auth.guard';
import { CreateFacultySubjectsComponent } from './admin/create-faculty-subjects/create-faculty-subjects.component';
import { ListFacultySubjectsComponent } from './admin/list-faculty-subjects/list-faculty-subjects.component';
import { UpdateFacultySubjectsComponent } from './admin/update-faculty-subjects/update-faculty-subjects.component';
import { DetailsFacultySubjectsComponent } from './admin/details-faculty-subjects/details-faculty-subjects.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  { 
    path: 'teacher-feedback/:class', 
    component: TeacherFeedbackComponent 
  },
  {
    path: 'dialogService',
    component: DialogComponentComponent
  },
  {
    path: 'feedbackSummary',
    component: FeedbackSummaryComponent,
    canActivate: [authGuard]
  },
  {
    path: 'feedbackSummary/:faculty',
    component: FeedbackSummaryComponent,
    canActivate: [authGuard]
  },
  {
    path: 'facultySubjectsList',
    component: ListFacultySubjectsComponent,
    canActivate: [authGuard]
  },
  {
    path: 'AddfeedbackSubjects',
    component: CreateFacultySubjectsComponent,
    canActivate: [authGuard]
  },
  {
    path: 'update-FacultySubjects/:id',
    component: UpdateFacultySubjectsComponent,
    canActivate: [authGuard]
  },
  {
    path: 'view-FacultySubjects/:id',
    component: DetailsFacultySubjectsComponent,
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

