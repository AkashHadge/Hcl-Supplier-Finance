import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {InvoiceInfoComponent} from '../invoice/invoice-info/invoice-info.component';


@NgModule({
  declarations: [DashboardComponent, InvoiceInfoComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ],
})
export class DashboardModule {
}
