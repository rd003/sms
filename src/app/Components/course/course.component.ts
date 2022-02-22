import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Models/Course';
import { statusModel } from 'src/app/Models/status-model';
import { CourseService } from 'src/app/Services/course.service';
import {FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses!:Course[];
  status!:statusModel;
  course!:Course;
  showAllRecords:boolean=true;
  courseForm=this.fb.group({
    id:[0],
    courseName:['',[Validators.required,Validators.minLength(4)]]
  });
  get f(){
    return this.courseForm.controls;
  }
  private getCourses(){
   this.courseService.getCourses().subscribe(data=>{
     this.courses=data;
   })
  }

  public addUpdateCourse(){
    if(this.course){
      this.course=Object.assign(this.courseForm.value);
    this.courseService.addUpdateCourse(this.course).subscribe(data=>{
      if(this.course.id==0){
        this.courses.push(this.course);
      }
      else{
        var index=this.courses.findIndex(a=>a.id==this.course.id);
        this.courses[index]= this.course;
      }
      this.status=data;
      if(this.status.statusCode>0){
        this.resetCourse();
      }
    })
  }
  }

  public deleteCourse(id:number){
    if(window.confirm('do you want to delete?'))
    {
    this.courseService.deleteCourse(id).subscribe(data=>{
      if(data.statusCode>0){
        if(this.courses){
         var index= this.courses.findIndex(a=>a.id==id);
        this.courses?.splice(index,1);
        }
      }
      else{
        window.alert(data.message);
      }
    
    })
  }
  }

  editCourse(course:Course){
    this.toggleRecords();
this.course=course;
  this.courseForm.patchValue(this.course);
  
  }

  resetCourse(){
    this.course={id:0,courseName:""};
    this.courseForm.patchValue(this.course);
  }
  resetStatus(){
    this.status={statusCode:0,message:''};
  }

  toggleRecords(){
    this.showAllRecords=!this.showAllRecords;
    this.resetCourse();
    this.resetStatus();

  }
  constructor(private courseService:CourseService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getCourses();
    this.resetCourse();
  }

}
