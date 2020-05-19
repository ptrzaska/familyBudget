import { TimeBoundedPlanEntry } from './../models/time-bounded-plan-entry';
import { MonthYear } from './../models/month-year';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlanEntry } from '../models';

@Component({
  selector: 'app-new-cost',
  templateUrl: './new-cost.component.html',
  styleUrls: ['./new-cost.component.less']
})
export class NewCostComponent implements OnInit {
  newCostValue: number;
  newCostName: string;
  newCostFrom: MonthYear;
  newCostTo: MonthYear;
  isTimeBounded: boolean;
  readonly = false;

  @Output() newCost = new EventEmitter<PlanEntry>();

  constructor() { }

  ngOnInit(): void {
  }

  newCostAdded() {
    const cost = this.isTimeBounded
      ? new TimeBoundedPlanEntry(this.newCostName, this.newCostValue, this.newCostFrom, this.newCostTo)
      : new PlanEntry(this.newCostName, this.newCostValue);

    this.newCost.emit(cost);
  }

}
