import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { statusModel } from '../Models/status-model';
import { city } from '../Models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {
 private baseUrl="http://localhost:82/api/city/";

 addUpdate(city:city):Observable<statusModel>{
   return this.http.post<statusModel>(this.baseUrl+'addUpdate',city);
 }

 getCity(id:number):Observable<city>{
   return this.http.get<city>(this.baseUrl+'getCity?id='+id);
 }
 delete(id:number):Observable<statusModel>{
   return this.http.get<statusModel>(this.baseUrl+'delete?id='+id);
 }

 getAll():Observable<city[]>{
   return this.http.get<city[]>(this.baseUrl+'getAll');
 }
  constructor(private http:HttpClient) { 
  }
}
