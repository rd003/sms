import { state } from 'src/app/Models/state';
import {Component} from '@angular/core';
import { StateService } from 'src/app/Services/state.service';
import { Router } from '@angular/router';
@Component({
    selector:'app-states',
    templateUrl:'./states.component.html'
})
export class StatesComponent{
    states!:state[];
    showDelete:boolean=false;
    constructor(private stateService:StateService,private router:Router){
      stateService.getAll().subscribe(data=>{
          this.states=data;
      },error=>{console.log(error)});
    }
    
    check(){
        const checkedItems=this.states.filter(a=>a.isChecked).length;
        if(checkedItems>0){
              this.showDelete=true;
        }else{
            this.showDelete=false;
        }
    }

   edit(id:number){
    this.router.navigate([`/edit-state/${id}`]);
   }
    
    delete(){
        if(window.confirm('do you want to delete?')){
            const ids=this.states.filter(a=>a.isChecked).map(a=>a.id);
           
            if(ids.length>0){
                this.stateService.delete(ids).subscribe(data=>{
                    window.alert(data.message);
                    if(data.statusCode==1){
                       ids.forEach(id => {
                           var index=this.states.findIndex(st=>st.id==id);
                           if(index>=0){
                               this.states.splice(index,1);
                           }
                       });
                    }
                });
            }
        }
    }

}