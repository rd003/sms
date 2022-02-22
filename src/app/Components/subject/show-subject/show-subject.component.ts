import {Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'src/app/Models/subject';
import { SubjectService } from 'src/app/Services/subject.service';

@Component({
   selector:'app-show-subject',
   templateUrl:'./show-subject.component.html'
})
export class ShowSubjectComponent implements OnInit{
    constructor(private subjectService:SubjectService,private router:Router){

    }
    subjects!:Subject[];
    
    edit(id:number){
    this.router.navigate([`edit-subject/${id}`]);
    }

    delete(index:number,id:number){
       if(window.confirm('do you want to delete?')){
       this.subjectService.delete(id).subscribe(data=>{
          if(data.statusCode==0){
             alert("could not deleted")
          }
          else{
             this.subjects.splice(index,1);
          }
       })
      }

    }
    getSubjects():void{
       this.subjectService.getAll().subscribe(data=>{
          this.subjects=data;
       },error=>{console.log(error)})
    }
    ngOnInit(): void {
        this.getSubjects();
    }
}