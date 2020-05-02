import { Expense } from '.';

export class PlanEntry {
  lastModificationDate: Date;
  plan: number;
  expenses: Expense[];

  constructor(public name: string) {

  }

  getExpensesSum(): number {
    let sum = 0;
    if (this.expenses) {
      this.expenses.forEach(e => sum = sum + e.value);
    }

    return sum;
  }
}
