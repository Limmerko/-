import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';
import { HttpResponse } from '@angular/common/http';
import { IPerson } from './person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(protected personService: PersonService) { }

  people: IPerson[];

  ngOnInit(): void {
    this.personService.getPeople().subscribe(
      (res: HttpResponse<IPerson[]>) => {
        this.people = res.body
      }
    );
  }
}
