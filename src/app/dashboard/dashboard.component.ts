import {Component, OnInit} from '@angular/core';
import {CryptoPriceService} from '../shared/services/crypto-price.service';
import {CryptoPriceModel} from '../shared/models/cryptoPrice.model';
import {MerchantService} from '../shared/services/merchant.service';
import {MatTableDataSource} from '@angular/material';
import {MerchantModel} from '../shared/models/merchant.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss',
    '../shared/styles/button.scss']
})
export class DashboardComponent implements OnInit {

  merchantSource: MatTableDataSource<MerchantModel>;
  displayedColumns: string[] = ['merchant_type', 'item_sold', 'amount_invoiced_crypto', 'currency_used_for_payments', 'crypto_price', 'amount_invoiced_usd', 'delete'];
  error: boolean;
  cryptoPrice: CryptoPriceModel;

  constructor(private merchantService: MerchantService,
              private cryptoPriceService: CryptoPriceService,
              private router: Router) {
  }

  ngOnInit() {
    this.merchantSource = new MatTableDataSource(this.merchantService.getAllMerchants());

    this.cryptoPriceService.getCryptoPrice()
      .subscribe(values => {
        this.cryptoPrice = {
          BTC: values[0]['data']['quotes']['USD']['price'],
          BCH: values[1]['data']['quotes']['USD']['price'],
          ETH: values[2]['data']['quotes']['USD']['price']
        };
      });

    this.merchantService.merchantUpdate.subscribe(data => {
      this.merchantSource = new MatTableDataSource(data as MerchantModel[]);
    });
  }

  addMerchant() {
    this.router.navigate(['new']);
  }

  onUpdate(i) {
    this.router.navigate(['update', i + 1]);
  }

  onDelete(i) {
    this.merchantService.deleteMerchant(i);
  }
}
