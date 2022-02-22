import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddMarksModel } from '../Models/marks/add-marks-model';
import { statusModel } from '../Models/status-model';

@Injectable({
    providedIn:'root'
})

export class MarksService{
 private baseUrl:string=environment.baseApi+'Marks/'
  constructor(private http:HttpClient){

  }

  add(model:AddMarksModel):Observable<statusModel>{
      return this.http.post<statusModel>(this.baseUrl+'add',model);
  }

}