import { PlanEntry } from './plan-entry';

export class Plan {
  archived: boolean; // only one plan can be active
  month: number;
  year: number;
  constPlannedExpenses: PlanEntry[];
  tempPlannedExpenses: PlanEntry[];
}
