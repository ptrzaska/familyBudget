import { MonthYear } from './../models/month-year';
import { TimeBoundedPlanEntry } from './../models/time-bounded-plan-entry';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanEntry } from '../models';

@Injectable()
export class MonthlyBudgetService {
  getCurrentCost(date: MonthYear) {

  }

  getConstCosts(): Observable<PlanEntry[]> {
    const costs = [new PlanEntry('Czynsz'),
    new PlanEntry('Przedszkole'),
    new PlanEntry('Abonament')];
    return new Observable((observer) => {
      observer.next(costs);
    });
  }

  getTimeBoundedCosts(): Observable<PlanEntry[]> {
    const costs = [new TimeBoundedPlanEntry('Raty za pralkę'),
    new TimeBoundedPlanEntry('Ubezpieczenie auta'),
    new TimeBoundedPlanEntry('Rata za meble')];
    return new Observable((observer) => {
      observer.next(costs);
    });
  }
}
