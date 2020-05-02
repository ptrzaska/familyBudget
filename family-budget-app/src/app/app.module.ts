import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthlyBudgetComponent } from './monthly-budget/monthly-budget.component';
import { MonthlyBudgetService } from './monthly-budget/monthly-budget.service';

@NgModule({
  declarations: [
    AppComponent,
    MonthlyBudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MonthlyBudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
