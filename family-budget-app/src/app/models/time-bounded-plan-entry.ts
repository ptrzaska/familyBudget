import { MonthYear } from './month-year';
import { PlanEntry } from './plan-entry';

export class TimeBoundedPlanEntry extends PlanEntry {

  constructor(name: string, value: number, public dateFrom: MonthYear, public dateTo: MonthYear) {
    super(name, value);
  }

  isActual(date: MonthYear): boolean {
    return (date.year >= this.dateFrom.year && date.month >= this.dateFrom.month) &&
      (date.year <= this.dateTo.year && date.month <= date.month);
  }
}
