import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {CryptoPriceService} from '../shared/services/crypto-price.service';
import {PriceCalculatorPipe} from '../shared/pipes/price_calculator.pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    PriceCalculatorPipe
  ],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [
    CryptoPriceService
  ],
  exports: [
    DashboardComponent
  ]
})

export class DashboardModule {
}
