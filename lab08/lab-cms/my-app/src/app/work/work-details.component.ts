import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IWork } from './work.model';
import { WorkService } from './work.service';
import { HttpResponse } from '@angular/common/http';

@Component({
    selector: 'app-work',
    templateUrl: './work-details.component.html'
})
export class WorkDetailComponent implements OnInit {
    constructor(public route: ActivatedRoute, protected workService: WorkService) { }

    work: IWork;

    ngOnInit() : void {
        const id = this.route.snapshot.paramMap.get('id');
        this.workService.getOneWork(+id).subscribe(
            (res: HttpResponse<IWork>) => {
                this.work = res.body;
            }
        );
    }
}