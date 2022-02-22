import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { statusModel } from 'src/app/Models/status-model';
import { student } from 'src/app/Models/student';
import { Course } from 'src/app/Models/Course';
import { StudentService } from 'src/app/Services/student.service';
import { CourseService } from 'src/app/Services/course.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-update-student',
  templateUrl: './add-update-student.component.html',
  styleUrls: ['./add-update-student.component.css']
})
export class AddUpdateStudentComponent implements OnInit {
  // student!:student;
  courses!:Course[];
  studentForm=this.fb.group({
    'id':[0],
    'course_Id':['',Validators.required],
    'name':['',Validators.required],
    'age':['',Validators.required],
    'address':['',Validators.required]
  }
  );
  status!:statusModel;
  constructor(private fb:FormBuilder,
    private studentService:StudentService,
    private courseService:CourseService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  get f()  {
    return this.studentForm.controls;
  }
  onSubmit(){
    this.studentService.addUpdateStudent(this.studentForm.value).subscribe(data=>{
      this.status=data;
      this.studentForm.reset();

    },error=>{
      console.log(error);
    })
  }

   getCourses(){
     this.courseService.getCourses().subscribe(data=>{
       this.courses= data;
     },
     error=>{
       console.log(error);
     })
   }

   
   getStudentById(id:number){
     this.studentService.getStudentById(id).subscribe(data=>{
       //this.student=data;
       this.studentForm.patchValue(data);
     },
     error=>{
       console.log(error)
     }
     )
   }

  ngOnInit(): void {
    this.getCourses();
    var strId= this.route.snapshot.paramMap.get('id');
    if(strId){
      var id=parseInt(strId);
      this.getStudentById(id);
      //console.log(this.student);

    }
  }

}
