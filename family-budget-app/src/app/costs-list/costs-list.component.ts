
import { Component, OnInit, Input } from '@angular/core';
import { Expense, PlanEntry } from '../models';

@Component({
  selector: 'app-costs-list',
  templateUrl: './costs-list.component.html',
  styleUrls: ['./costs-list.component.less']
})
export class CostsListComponent implements OnInit {

  @Input() listTitle: string;
  @Input() costs: PlanEntry[];
  @Input() readonly: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  getCostsSum(): number {
    let sum = 0;
    this.costs.forEach(cost => {
       sum = sum + cost.getExpensesSum();
     });

    return sum;
  }

  addNewExpense(planEntry: PlanEntry) {
    const expense = new Expense(100, new Date(2020, 5, 24), 'test entry');
    planEntry.expenses.push(expense);
  }

}
