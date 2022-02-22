import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { AddMarksModel } from "src/app/Models/marks/add-marks-model";
import { ShowSubject } from "src/app/Models/show-subject";
import { statusModel } from "src/app/Models/status-model";
import { ManageStudentService } from "src/app/Services/manage-student-subject-service";
import { MarksService } from "src/app/Services/marks.service";

@Component({
   selector:'app-add-marks',
   templateUrl:'add-marks.compontent.html'
})

export class AddMarksComponent implements OnInit{

    studentId:number=0;
    frm:FormGroup=this.fb.group({
        id:[0],
        student_Id:[this.studentId],
        subject_Id:[0,Validators.required],
        yearFrom:['',Validators.required],
        yearTo:['',Validators.required],
        maxMarks:['',Validators.required],
        gainedMarks:['',Validators.required]
     });

    status!:statusModel;
    studentSubjects!:ShowSubject[];
    constructor(private marksService:MarksService,
        private fb:FormBuilder,
        private subjectService:ManageStudentService,
        private route:ActivatedRoute){
    
    }
    get f(){
        return this.frm.controls;
    }
    onSubmit(){
        this.status= {statusCode:1,message:"wait..."};
        const data:AddMarksModel=Object.assign(this.frm.value);
        const data2:AddMarksModel= this.frm.value as AddMarksModel;
        console.log(data);
        console.log(data2);
    //  this.marksService.add(this.frm.value).subscribe(data=>{
    //      this.status=data;
    //  },error=>{
    //      this.status={statusCode:0,message:"Error on server side"};
    //      console.log(error)})
    }

    getStudentsSubject(id:number){
      this.subjectService.getRecords(id).subscribe(data=>{
        this.studentSubjects=data.subjects;
      },error=>{
          console.log(error);
      })
    }

    ngOnInit(): void {
     var id=this.route.snapshot.params["id"];
     if(id){
         this.studentId=id;
     this.getStudentsSubject(this.studentId);

     }

  

    }
}