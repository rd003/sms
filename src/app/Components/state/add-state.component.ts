import {Component} from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { state } from 'src/app/Models/state';
import { statusModel } from 'src/app/Models/status-model';
import { StateService } from 'src/app/Services/state.service';
@Component({
    selector:'app-add-state',
    templateUrl:'./add-state-component.html'

})
export class AddStateComponent{
    submitting=false;
    status!:statusModel;
    states:state[]=[];
    frm=this.fb.group({
        id:[0],
        stateName:['',Validators.required]
    })
    get f(){
        return this.frm.controls;
    }
   constructor(private stateService:StateService,private fb:FormBuilder){
    
   }
   save(){
       this.submitting=true;
      if(this.states.length>0){
      this.stateService.add(this.states).subscribe(data=>{
          this.status=data;
      },error=>{
          console.log(error);
      },()=>{
        this.submitting=false;
        
        if(this.status.statusCode==1){
            setTimeout(() => {
                this.states=[];
            }, 2000);
        }
      })
      
    }
    }

    onPost(){
        var state:state=Object.assign(this.frm.value);
        state.id=0;
       if(state){
          
          this.states.push(state);
          this.frm.reset();
       }
    }
    remove(index:number){
        this.states.splice(index,1);
    }

}