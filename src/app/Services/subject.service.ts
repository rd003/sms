import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Subject } from '../Models/subject';
import { environment } from 'src/environments/environment';
import { statusModel } from '../Models/status-model';
// @Injectable({
//     providedIn:"root"
// })
@Injectable()
export class SubjectService{
   public constructor(private http:HttpClient) {
    }
    private baseUrl:string=environment.baseApi+'subject/';
    
    addUpdate(model:Subject):Observable<statusModel>{
       return this.http.post<statusModel>(this.baseUrl+'addupdate',model)
    }

    getById(id:number):Observable<statusModel>{
      return this.http.get<statusModel>(this.baseUrl+`getbyid/${id}`)
    }

    delete(id:number):Observable<statusModel>{
        return this.http.delete<statusModel>(this.baseUrl+`delete/${id}`)
    }

    getAll():Observable<Subject[]>{
       return this.http.get<Subject[]>(this.baseUrl+"getAll");
    }

}