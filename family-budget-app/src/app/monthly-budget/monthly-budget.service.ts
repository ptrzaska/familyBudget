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
    const costs = [new PlanEntry('Czynsz', 440),
    new PlanEntry('Przedszkole', 550),
    new PlanEntry('Abonament', 120)];
    return new Observable((observer) => {
      observer.next(costs);
    });
  }

  getTimeBoundedCosts(): Observable<PlanEntry[]> {
    const costs = [new TimeBoundedPlanEntry('Raty za pralkę', 125, new MonthYear(5, 2020), new MonthYear(3, 2021)),
    new TimeBoundedPlanEntry('Ubezpieczenie auta', 80, new MonthYear(5, 2020), new MonthYear(6, 2020)),
    new TimeBoundedPlanEntry('Rata za meble', 110, new MonthYear(5, 2020), new MonthYear(8, 2020))];
    return new Observable((observer) => {
      observer.next(costs);
    });
  }
}
