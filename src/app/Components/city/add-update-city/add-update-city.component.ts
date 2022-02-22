import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { city } from 'src/app/Models/city';
import { statusModel } from 'src/app/Models/status-model';
import { CityService } from 'src/app/Services/city.service';

@Component({
  selector: 'app-add-update-city',
  templateUrl: './add-update-city.component.html',
  styleUrls: ['./add-update-city.component.css']
})
export class AddUpdateCityComponent implements OnInit {
  status!:statusModel;
  city!:city;
  onSubmit(){
     this.cityService.addUpdate(this.city).subscribe(data=>{
      this.status=data;
      if(this.city.id>0){
        this.router.navigate(['/city']);
      }
      else{
        this.city={id:0,cityName:""};
      }
     },
     error=>{
       console.log(error);
     }
     )
  }
  constructor(private cityService:CityService,private route:ActivatedRoute,private router:Router) { }
  
  ngOnInit(): void {
    this.city={id:0,cityName:""};
    var strId=this.route.snapshot.paramMap.get('id');
      if(strId){
        var id= parseInt(strId);
        this.cityService.getCity(id).subscribe(data=>{
          this.city=data;
        },
         error=>{
            console.log(error);
         }
        )
      }
  }

}
