import { TimeBoundedPlanEntry } from './../models/time-bounded-plan-entry';
import { MonthYear } from './../models/month-year';
import { PlanEntry } from './../models/plan-entry';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Plan } from '../models';
import { MonthlyBudgetService } from './monthly-budget.service';

const DATE_INPUT_NAME = 'date';

@Component({
  selector: 'app-monthly-budget',
  templateUrl: './monthly-budget.component.html',
  styleUrls: ['./monthly-budget.component.less']
})
export class MonthlyBudgetComponent implements OnInit, OnChanges {
  plan: Plan = {} as Plan;

  @Input() date: MonthYear;

  constructor(private service: MonthlyBudgetService) { }

  ngOnChanges(changes: SimpleChanges): void {
    const date = changes[DATE_INPUT_NAME];

    if(date && date.currentValue) {
      //load data for date
      //if no data - make an offer to create new, else load data for specified date
    }
  }

  ngOnInit(): void {
    this.plan = new Plan ();
    this.plan.archived = false;
    this.plan.currentPlannedCosts = [ new PlanEntry('Dentysta', 180),
      new PlanEntry('Opony', 1000)
    ];
    this.plan.date = new MonthYear(5, 2020);

    this.addConstCosts();
  }

  addTempCost(planEntry: PlanEntry) {
    this.plan.currentPlannedCosts.push(planEntry);
  }

  removeTempCost(planEntry: PlanEntry) {
    const idx = this.plan.currentPlannedCosts.indexOf(planEntry);
    this.plan.currentPlannedCosts.splice(idx, 1);
  }

  removeConstCost(planEntry: PlanEntry) {
    const idx = this.plan.constPlannedCosts.indexOf(planEntry);
    this.plan.constPlannedCosts.splice(idx, 1);
  }

  addConstCosts() {
    this.service.getConstCosts().subscribe({
      next: (data: PlanEntry[]) => {
        this.plan.constPlannedCosts = data;
      }
    });
  }

  addTimeBoundedCosts(){
    this.service.getTimeBoundedCosts().subscribe({
      next: (data: TimeBoundedPlanEntry[]) => {
        this.plan.constPlannedCosts = this.plan.constPlannedCosts.concat(data.filter(x => x.isActual(this.date)));
      }
    });
  }

  saveBudget() {
    //save plan for date
  }

}
