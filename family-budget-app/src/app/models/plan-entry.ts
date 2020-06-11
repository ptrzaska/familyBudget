import { Expense } from '.';

export class PlanEntry {
  lastModificationDate: Date;
  expenses: Expense[];
  isCompleted: boolean;

  constructor(public name: string, public value: number) {
    this.expenses = [];
    this.isCompleted = false;
  }

  getExpensesSum(): number {
    let sum = 0;
    if (this.expenses) {
      this.expenses.forEach(e => sum = sum + e.value);
    }

    return sum;
  }
}
