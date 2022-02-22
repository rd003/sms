import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { state } from '../Models/state';
import { statusModel } from '../Models/status-model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
    providedIn:'root'
})

export class StateService{
   
    private baseUrl:string=environment.baseApi+'state/'
    constructor(private http:HttpClient){
    
    } 

    add(states:state[]):Observable<statusModel>{
        return this.http.post<statusModel>(this.baseUrl+'add',states);
    }
    update(state:state){
       return this.http.post<statusModel>(this.baseUrl+'update',state);
    }
    delete(ids:number[]){
        return this.http.post<statusModel>(this.baseUrl+'delete',ids);
    }
    getById(id:number){
       return this.http.get<state>(this.baseUrl+'getbyid/'+id);
    }
    getAll(){
      return this.http.get<state[]>(this.baseUrl+'getall');
    }

}