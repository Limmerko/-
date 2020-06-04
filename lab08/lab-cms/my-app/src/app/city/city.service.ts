import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICity } from './city.model';

@Injectable({ providedIn: 'root'})
export class CityService {
    constructor(protected http: HttpClient) {}

    getCities(): Observable<HttpResponse<ICity[]>> {
        return this.http.get<ICity[]>("http://localhost:1337/cities", { observe: 'response' });
    }

    getOneCities(id: number): Observable<HttpResponse<ICity>> {
        return this.http.get<ICity>("http://localhost:1337/cities/" + id, { observe: 'response' });
    }
}