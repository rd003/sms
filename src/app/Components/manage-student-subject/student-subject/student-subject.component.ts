import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GetStudentSubjectModel } from "src/app/Models/get-student-subect-model";
import { RemoveSubject } from "src/app/Models/remove-subject";
import { ManageStudentService } from "src/app/Services/manage-student-subject-service";
@Component({
    templateUrl:'./student-subject.component.html'
})
export class StudentSubjectComponent{
    studentSubjectData!:GetStudentSubjectModel;
    
    constructor(private route:ActivatedRoute,private subjectService:ManageStudentService){
        var id=this.route.snapshot.params["id"];
        if(id){
           this.subjectService.getRecords(id).subscribe(data=>{
               this.studentSubjectData=data;
           })
        }
    }
    
    removeSubjects(){
        if(window.confirm("Do you want to delete?")){
           if(this.studentSubjectData){
               if(this.studentSubjectData.subjects.length>0){
                 var ids= this.studentSubjectData.subjects.filter(a=>a.isChecked).map(a=>a.id);
                 var data:RemoveSubject={ids:ids};
                 this.subjectService.remove(data).subscribe(a=>{
                    window.alert(a.message);
                 })
                 setTimeout(() => {
                    const loc=window.location.href;
                    window.location.href=loc;
                 }, 2000);
               }
           }
        }
    }

}