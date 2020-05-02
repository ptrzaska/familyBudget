import { MonthYear } from './month-year';
import { PlanEntry } from './plan-entry';

export class TimeBoundedPlanEntry extends PlanEntry {
  dateFrom: MonthYear;
  dateTo: MonthYear;

  isActual(date: MonthYear): boolean {
    return (date.year >= this.dateFrom.year && date.month >= this.dateFrom.month) &&
      (date.year <= this.dateTo.year && date.month <= date.month);
  }
}
