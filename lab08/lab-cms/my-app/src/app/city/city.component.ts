import { Component, OnInit } from '@angular/core';
import { CityService } from './city.service';
import { HttpResponse } from '@angular/common/http';
import { ICity } from './city.model';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(
    protected cityService: CityService) { }

  cities: ICity[];

  ngOnInit(): void {
    this.cityService.getCities().subscribe(
      (res: HttpResponse<ICity[]>) => {
        this.cities = res.body
      }
    );

  }
}
