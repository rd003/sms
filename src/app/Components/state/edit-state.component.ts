import {Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { state } from 'src/app/Models/state';
import { statusModel } from 'src/app/Models/status-model';
import { StateService } from 'src/app/Services/state.service';

@Component({
    selector:"app-edit-state",
    templateUrl:"./edit-state.component.html"
})

export class EditStateComponent{
    status!:statusModel;
  frm=this.fb.group({
      'id': [],
      'stateName':[Validators.required]
  });
  get f(){
      return this.frm.controls;
  }

  onSubmit(){
    this.stateService.update(this.frm.value).subscribe(data=>{
        this.status=data;
    },error=>{console.log(error)})
  }
  constructor(private stateService:StateService,private route:ActivatedRoute,private fb:FormBuilder){
      const id=this.route.snapshot.params['id'];
      if(id){
          this.stateService.getById(id).subscribe(data=>{
            this.frm.patchValue(data);
          },
          error=>{console.log(error);})
      }
  }
}