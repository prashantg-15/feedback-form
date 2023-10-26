import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TeacherFeedbackComponent } from './teacher-feedback/teacher-feedback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { FeedbackSummaryComponent } from './feedback-summary/feedback-summary.component';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { LoaderComponent } from './loader/loader.component';
import { CreateFacultySubjectsComponent } from './admin/create-faculty-subjects/create-faculty-subjects.component';
import { ListFacultySubjectsComponent } from './admin/list-faculty-subjects/list-faculty-subjects.component';
import { DetailsFacultySubjectsComponent } from './admin/details-faculty-subjects/details-faculty-subjects.component';
import { UpdateFacultySubjectsComponent } from './admin/update-faculty-subjects/update-faculty-subjects.component';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TeacherFeedbackComponent,
    DialogComponentComponent,
    FeedbackSummaryComponent,
    LoaderComponent,
    CreateFacultySubjectsComponent,
    ListFacultySubjectsComponent,
    DetailsFacultySubjectsComponent,
    UpdateFacultySubjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    AccordionModule,
    CardModule,
    TableModule,
    TagModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
