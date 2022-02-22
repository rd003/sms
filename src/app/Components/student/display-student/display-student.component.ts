import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { student } from 'src/app/Models/student';
import { StudentService } from 'src/app/Services/student.service';


@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {
  students!:student[];
  getStudents(){
    this.studentService.getStudents().subscribe(data=>{
      this.students=data;
    },errror=>{
      console.log(errror);
    })
  }

  
  editStudent(id:number){
    this.router.navigate(['/edit-student/'+id])
  }

  addSubject(id:number){
    this.router.navigate([`/applicable-subject/${id}`])
  }

  displaySubject(id:number){
    this.router.navigate([`/student-subjects/${id}`])
  }
 
  addMarks(id:number){
    this.router.navigate([`/add-marks/${id}`])
  }
  deleteStudent(id:number,index:number){
    if(window.confirm('do you want to delete?')){
      this.studentService.deleteStudent(id).subscribe(
        data=>{
          if(data.statusCode>0){
            this.students.splice(index,1);
          }
          else{
            window.alert("error");
          }
        },
        error=>{
          console.log(error);
        }
      );
    }
  }

  constructor(private studentService:StudentService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.getStudents();
  }

}
