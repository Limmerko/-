import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPerson } from './person.model';

@Injectable({ providedIn: 'root'})
export class PersonService {
    constructor(protected http: HttpClient) {}

    getPeople(): Observable<HttpResponse<IPerson[]>> {
        return this.http.get<IPerson[]>("http://localhost:1337/people", { observe: 'response' });
    }

    getOnePeople(id: number): Observable<HttpResponse<IPerson>> {
        return this.http.get<IPerson>("http://localhost:1337/people/" + id, { observe: 'response' });
    }
}