import { MonthYear } from './month-year';
import { PlanEntry } from './plan-entry';

export class Plan {
  archived: boolean; // only one plan can be active
  date: MonthYear;
  constPlannedCosts: PlanEntry[];
  currentPlannedCosts: PlanEntry[];
  temporaryCosts: PlanEntry[];

  constructor() {
    this.constPlannedCosts = [];
    this.currentPlannedCosts = [];
    this.temporaryCosts = [];
  }

  getAllCosts(): PlanEntry[] {
    return this.currentPlannedCosts.concat(this.constPlannedCosts).concat(this.temporaryCosts);
  }
}
