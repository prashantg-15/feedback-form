import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TeacherFeedbackComponent } from './teacher-feedback/teacher-feedback.component';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { FeedbackSummaryComponent } from './feedback-summary/feedback-summary.component';

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
    component: FeedbackSummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
