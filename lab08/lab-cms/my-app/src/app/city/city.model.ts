import { IPerson } from '../person/person.model';

export interface ICity {
    id?: number;
    name?: string;
    people?: IPerson[];
}

export class City implements ICity {
    constructor(public id?: number, public name?: string, public people?: IPerson[]){};
}