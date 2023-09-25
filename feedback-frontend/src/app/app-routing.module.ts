import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TeacherFeedbackComponent } from './teacher-feedback/teacher-feedback.component';
import { CurriculumFeedbackComponent } from './curriculum-feedback/curriculum-feedback.component';

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
    path: 'curriculum-feedback', 
    component: CurriculumFeedbackComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
