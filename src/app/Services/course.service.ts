import { Injectable } from '@angular/core';
import { Course } from '../Models/Course';
import { statusModel } from '../Models/status-model';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl:string="http://localhost:82/api/course"
  constructor(private http:HttpClient) { }

  addUpdateCourse(course:Course):Observable<statusModel>{
    return this.http.post<statusModel>(this.baseUrl+'/AddUpdateCourse',course);
  }

  deleteCourse(id:number):Observable<statusModel>{
    return this.http.get<statusModel>(this.baseUrl+'/DeleteCourse?id='+id);
  }
  
  getCourses():Observable<Course[]>{
  return this.http.get<Course[]>(this.baseUrl+'/GetAllCourses');
  }
  
  

}
