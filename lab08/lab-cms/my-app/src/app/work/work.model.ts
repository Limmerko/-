import { IPerson } from '../person/person.model';

export interface IWork {
    id?: number;
    address?: string;
    phone?: string;
    people?: IPerson[];
}

export class Work implements IWork {
    constructor(public id?: number, public address?: string, public phone?: string, public people?: IPerson[]){};
}