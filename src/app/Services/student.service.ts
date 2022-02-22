import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { statusModel } from '../Models/status-model';
import { student } from '../Models/student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
 
private  baseUrl=environment.baseApi;

   getStudents():Observable<student[]>{
     return this.http.get<student[]>(this.baseUrl+'student/getstudents');
   }

   getStudentById(id:number): Observable<student>{
     return this.http.get<student>(this.baseUrl+'student/getstudentbyid?id='+id);
   }

   addUpdateStudent(student:student):Observable<statusModel>{
     return this.http.post<statusModel>(this.baseUrl+'student/AddUpdateStudent',student);
   }

   deleteStudent(id:number):Observable<statusModel>{
     return this.http.get<statusModel>(this.baseUrl+'student/DeleteStudent?id='+id);
   }

  constructor(private http:HttpClient
    ) { }
}
