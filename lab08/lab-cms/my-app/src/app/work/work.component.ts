import { Component, OnInit } from '@angular/core';
import { WorkService } from './work.service';
import { HttpResponse } from '@angular/common/http';
import { IWork } from './work.model';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(protected workService: WorkService) { }

  works: IWork[];

  ngOnInit(): void {
    this.workService.getWorks().subscribe(
      (res: HttpResponse<IWork[]>) => {
        this.works = res.body;
      }
    );
  }

}
