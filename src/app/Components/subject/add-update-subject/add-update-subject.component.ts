import { Component } from "@angular/core";
import { Course } from "src/app/Models/Course";
import {ActivatedRoute} from '@angular/router';
import { CourseService } from "src/app/Services/course.service";
import { SubjectService } from "src/app/Services/subject.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { statusModel } from "src/app/Models/status-model";
@Component({
    selector:'app-add-update-subject',
    templateUrl:'./add-update-subject.component.html'
})

export class AddUpdateSubjectComponent {

    courses!:Course[];
    frm!:FormGroup;
    status!:statusModel;
    getCourses(){
        this.courseServices.getCourses().subscribe(data=>{
            this.courses=data;
        })
    }
    constructor(
        private courseServices:CourseService,
        private subjectService:SubjectService,
        private route:ActivatedRoute,
        private fb:FormBuilder)
        {
          this.getCourses();
          this.frm=fb.group({
              id:[0],
              subjectName:['',Validators.required],
              courseId:[0,Validators.required],
              isDeleted:[false,Validators.required]
          });
          const id=this.route.snapshot.params["id"];
          if(id){
              this.subjectService.getById(id).subscribe(data=>{
                  this.frm.patchValue(data);
              })
          }
        }
    
    get f(){
        return this.frm.controls;
    }

    submit(){
        this.subjectService.addUpdate(this.frm.value).subscribe(data=>{
            this.status=data;
        })
    }
    
    
    
}