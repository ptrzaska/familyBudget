import { PlanEntry } from './../models/plan-entry';
import { Component, OnInit, Input } from '@angular/core';

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

}
