import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICity } from './city.model';
import { CityService } from './city.service';
import { HttpResponse } from '@angular/common/http';

@Component({
    selector: 'app-city',
    templateUrl: './city-details.component.html'
})
export class CityDetailComponent implements OnInit {
    constructor(public route: ActivatedRoute, protected cityService: CityService) { }

    city: ICity;

    ngOnInit() : void {
        const id = this.route.snapshot.paramMap.get('id');
        this.cityService.getOneCities(+id).subscribe(
            (res: HttpResponse<ICity>) => {
                this.city = res.body;
            }
        );
    }
}