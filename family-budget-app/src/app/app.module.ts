import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthlyBudgetComponent } from './monthly-budget/monthly-budget.component';
import { MonthlyBudgetService } from './monthly-budget/monthly-budget.service';
import { CostsListComponent } from './costs-list/costs-list.component';
import { NewCostComponent } from './new-cost/new-cost.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthlyBudgetComponent,
    CostsListComponent,
    NewCostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MonthlyBudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
