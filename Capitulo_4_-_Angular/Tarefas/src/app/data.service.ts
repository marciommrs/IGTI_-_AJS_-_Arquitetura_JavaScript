import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

    private objetivos = new BehaviorSubject<any>(['Objetivo de vida Inicial', 'Outro objetivo de vida']);
    objetivo = this.objetivos.asObservable();

    constructor() { }

    changeGoal(objetivo) {
        this.objetivos.next(objetivo);
    }
}