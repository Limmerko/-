import { IWork } from '../work/work.model';
import { ICity } from '../city/city.model';

export interface IPerson {
    id?: number;
    name?: string;
    work?: IWork;
    city?: ICity;
}

export class Person implements Person {
    constructor(public id?: number, public name?: string, public work?: IWork, public city?: ICity){};
}