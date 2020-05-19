import { Expense } from '.';

export class PlanEntry {
  lastModificationDate: Date;
  expenses: Expense[];

  constructor(public name: string, public value: number) {
    this.expenses = [];
  }

  getExpensesSum(): number {
    let sum = 0;
    if (this.expenses) {
      this.expenses.forEach(e => sum = sum + e.value);
    }

    return sum;
  }
}
