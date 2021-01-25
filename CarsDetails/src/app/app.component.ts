import { Component, OnInit } from '@angular/core';
import { Cars } from './cars.model';
import { CarServiceService } from './car-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Cars$: Cars[];
  
  constructor(private carServiceService : CarServiceService) {}

  ngOnInit(){
    return this.carServiceService.getCars()
      .subscribe(data => this.Cars$ = data)
  }
}
