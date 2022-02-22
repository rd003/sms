import { Component, Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AddStudentSubjectModel } from "../Models/add-student-subject-model";
import { statusModel } from "../Models/status-model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RemoveSubject } from "../Models/remove-subject";
import { GetStudentSubjectModel } from "../Models/get-student-subect-model";
@Injectable({
  providedIn:'root'
})
export class ManageStudentService{
    constructor(private http:HttpClient) {

    }
   baseUrl:string=environment.baseApi+'StudentSubject/';
   addUrl:string=this.baseUrl+'AddSubjects';
   deleteUrl:string=this.baseUrl+'RemoveSubjects';
   getRecordsUrl:string=this.baseUrl+"GetSubjects?studentId=";

   add(data:AddStudentSubjectModel):Observable<statusModel>{
      return this.http.post<statusModel>(this.addUrl,data);
   }

   remove(data:RemoveSubject):Observable<statusModel>{
       return this.http.post<statusModel>(this.deleteUrl,data);
   }

   getRecords(studentId:number):Observable<GetStudentSubjectModel>{
       return this.http.get<GetStudentSubjectModel>(this.getRecordsUrl+studentId);
   }

   getApplicableSubjects(studentId:number):Observable<GetStudentSubjectModel>{
       return this.http.get<GetStudentSubjectModel>(this.baseUrl+'GetApplicableSubjects?studentId='+studentId);
   }
   
}