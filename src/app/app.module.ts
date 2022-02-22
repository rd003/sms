import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReativeFormTestComponent } from './Components/reative-form-test/reative-form-test.component';
import { ProfileEditorComponent } from './Components/profile-editor/profile-editor.component';
import { CourseComponent } from './Components/course/course.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddUpdateCityComponent } from './Components/city/add-update-city/add-update-city.component';
import { DisplayCitiesComponent } from './Components/city/display-cities/display-cities.component';
import { AddUpdateStudentComponent } from './Components/student/add-update-student/add-update-student.component';
import { DisplayStudentComponent } from './Components/student/display-student/display-student.component';
import { AddUpdateSubjectComponent } from './Components/subject/add-update-subject/add-update-subject.component';
import { ShowSubjectComponent } from './Components/subject/show-subject/show-subject.component';
import { SubjectService } from './Services/subject.service';
import { ApplicableSubjectComponent } from './Components/manage-student-subject/applicable-subject/appllicable-subject.component';
import { StudentSubjectComponent } from './Components/manage-student-subject/student-subject/student-subject.component';
import { AddStateComponent } from './Components/state/add-state.component';
import { StatesComponent } from './Components/state/states.component';
import { EditStateComponent } from './Components/state/edit-state.component';
import { AddMarksComponent } from './Components/marks/add-marks.compontent';

@NgModule({
  declarations: [
    AppComponent,
    StudentSubjectComponent,
    ReativeFormTestComponent,
    ProfileEditorComponent,
    CourseComponent,
    DashboardComponent,
    AddUpdateCityComponent,
    DisplayCitiesComponent,
    AddUpdateStudentComponent,
    DisplayStudentComponent,
    AddUpdateSubjectComponent,
    ShowSubjectComponent,
    ApplicableSubjectComponent,
    AddStateComponent,
    StatesComponent,EditStateComponent,
    AddMarksComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
