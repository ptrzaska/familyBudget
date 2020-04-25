import { Expense } from '.';

export class PlanEntry {
  lastModificationDate: Date;
  name: string;
  plan: number;
  expenses: Expense[];
}
