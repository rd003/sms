import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUpdateCityComponent } from './Components/city/add-update-city/add-update-city.component';
import { DisplayCitiesComponent } from './Components/city/display-cities/display-cities.component';
import { CourseComponent } from './Components/course/course.component';
import { ApplicableSubjectComponent } from './Components/manage-student-subject/applicable-subject/appllicable-subject.component';
import { StudentSubjectComponent } from './Components/manage-student-subject/student-subject/student-subject.component';
import { AddMarksComponent } from './Components/marks/add-marks.compontent';
import { AddStateComponent } from './Components/state/add-state.component';
import { EditStateComponent } from './Components/state/edit-state.component';
import { StatesComponent } from './Components/state/states.component';
import { AddUpdateStudentComponent } from './Components/student/add-update-student/add-update-student.component';
import { DisplayStudentComponent } from './Components/student/display-student/display-student.component';
import { AddUpdateSubjectComponent } from './Components/subject/add-update-subject/add-update-subject.component';
import { ShowSubjectComponent } from './Components/subject/show-subject/show-subject.component';

const routes: Routes = [
  {path:'course',component:CourseComponent},
  {path:'student',component:DisplayStudentComponent},
  {path:'add-student',component:AddUpdateStudentComponent},
  {path:'edit-student/:id',component:AddUpdateStudentComponent},
  {path:'',redirectTo:'/course',pathMatch:'full'},
  {path:"city",component:DisplayCitiesComponent},
  {path:"add-city",component:AddUpdateCityComponent},
  {path:"edit-city/:id",component:AddUpdateCityComponent},
  {path:"add-subject",component:AddUpdateSubjectComponent},
  {path:"edit-subject/:id",component:AddUpdateSubjectComponent},
  {path:'subjects',component:ShowSubjectComponent},
  {path:'applicable-subject/:id',component:ApplicableSubjectComponent},
  {path:'student-subjects/:id',component:StudentSubjectComponent},
  {path:'add-state',component:AddStateComponent},
  {path:'states',component:StatesComponent},
  {path:'edit-state/:id',component:EditStateComponent},
  {path:'add-marks/:id',component:AddMarksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
