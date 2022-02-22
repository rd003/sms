import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-reative-form-test',
  templateUrl: './reative-form-test.component.html',
  styleUrls: ['./reative-form-test.component.css']
})
export class ReativeFormTestComponent implements OnInit {
 
  name=new FormControl("");

  updateName(){
    this.name.setValue("nancy");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
