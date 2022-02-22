import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GetStudentSubjectModel } from "src/app/Models/get-student-subect-model";
import { ManageStudentService } from "src/app/Services/manage-student-subject-service";
@Component({
    selector:'app-applicable-subject',
    templateUrl:'./applicable-subject.component.html'
})
export class ApplicableSubjectComponent implements OnInit{
    subjectData!:GetStudentSubjectModel;
    selectedSubjects!:number[];
    constructor(private route:ActivatedRoute,private manageStudentService:ManageStudentService){
        var id= this.route.snapshot.params["id"];
        if(id){
             this.manageStudentService.getApplicableSubjects(id).subscribe(data=>{
                 this.subjectData=data;
             },error=>console.log(error))
        }
    }


    addSubject(){
        if(this.subjectData && this.subjectData.subjects.length>0){
            var subjectIds:number[]=[];
            this.subjectData.subjects.forEach(a=>{
              if(a.isChecked)
              subjectIds.push(a.subjectId);
            })
            var obj:any={studentId:this.subjectData.studentId,subjectIds:subjectIds};
            this.manageStudentService.add(obj).subscribe(a=>{
                window.alert(a.message);
            })
            setTimeout(()=>{
                var loc=window.location.href;
                window.location.href=loc;
            },2000)
        }
    }

    ngOnInit(): void {
      
    }
}