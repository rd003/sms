import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/Services/city.service';
import { city } from 'src/app/Models/city';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-cities',
  templateUrl: './display-cities.component.html',
  styleUrls: ['./display-cities.component.css']
})
export class DisplayCitiesComponent implements OnInit {
  cities!:city[];
  
  addMore(){
    this.router.navigate(['/add-city'])
  }

  editCity(id:number){
    this.router.navigate([`/edit-city/${id}`])
  }

  deleteCity(id:number,index:number){
    if(window.confirm('do you want to delete?')){
       this.cityService.delete(id).subscribe(data=>{
         if(data.statusCode>0){
           this.cities.splice(index,1);
         }
         else{
           alert("Could not deleted");
         }
       },
       error=>{
        alert("Could not deleted");
        console.log(error);
       })
    }
  }

  loadCities(){
    this.cityService.getAll().subscribe(data=>
        {
          this.cities=data;
        },
        error=>console.log(error)
      );
  }

  constructor(private cityService:CityService,
    private router:Router,route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.loadCities();
  }

}
