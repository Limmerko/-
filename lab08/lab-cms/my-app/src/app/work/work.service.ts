import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWork } from './work.model';

@Injectable({ providedIn: 'root'})
export class WorkService {
    constructor(protected http: HttpClient) {}

    getWorks(): Observable<HttpResponse<IWork[]>> {
        return this.http.get<IWork[]>("http://localhost:1337/works", { observe: 'response' });
    }

    getOneWork(id: number): Observable<HttpResponse<IWork>> {
        return this.http.get<IWork>("http://localhost:1337/works/" + id, { observe: 'response' });
    }
}