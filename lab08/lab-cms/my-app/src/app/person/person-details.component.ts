import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPerson } from './person.model';
import { PersonService } from './person.service';
import { HttpResponse } from '@angular/common/http';

@Component({
    selector: 'app-person',
    templateUrl: './person-details.component.html'
})
export class PersonDetailComponent implements OnInit {
    constructor(public route: ActivatedRoute, protected personService: PersonService) { }

    person: IPerson;

    ngOnInit() : void {
        const id = this.route.snapshot.paramMap.get('id');
        this.personService.getOnePeople(+id).subscribe(
            (res: HttpResponse<IPerson>) => {
                this.person = res.body;
            }
        );
    }
}