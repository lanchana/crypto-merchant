import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MerchantModel} from '../shared/models/merchant.model';
import {MerchantService} from '../shared/services/merchant.service';

@Component({
  selector: 'app-merchant-add-update',
  templateUrl: './merchant-add-update.component.html',
  styleUrls: ['./merchant-add-update.component.scss',
    '../shared/styles/button.scss',
    '../shared/styles/global-styles.scss']
})
export class MerchantAddUpdateComponent implements OnInit {

  id: number;
  updateForm: FormGroup;
  paymentTypes = ['BTC', 'BCH', 'ETH'];

  constructor(private activatedRoute: ActivatedRoute,
              private merchantService: MerchantService,
              private router: Router) {
    this.merchantService.merchantUpdate.subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);


    this.updateForm = new FormGroup({
      'merchantType': new FormControl('', Validators.required),
      'itemSold': new FormControl('', Validators.required),
      'amountInvoiced': new FormControl('', Validators.required),
      'currencyUsedForPayments': new FormControl('', Validators.required)
    });

    if (this.id) {
      this.merchantService.getMerchantByIndex(this.id - 1).subscribe(data => {
        console.log(data);
        this.updateForm.setValue({
          'merchantType': data['merchant_type'],
          'itemSold': data['item_sold'],
          'amountInvoiced': data['amount_invoiced'],
          'currencyUsedForPayments': data['currency_used_for_payments']
        });
      });
    }
  }

  onSubmit() {
    console.log(this.updateForm.controls);
    const updateControls = this.updateForm.controls;
    const merchant: MerchantModel = {
      'uid': Math.floor(Math.random() * 999) + 1 + '',
      'merchant_type': updateControls.merchantType.value,
      'item_sold': updateControls.itemSold.value,
      'amount_invoiced': +updateControls.amountInvoiced.value,
      'currency_used_for_payments': updateControls.currencyUsedForPayments.value
    };

    if (this.id) {
      this.merchantService.updateMerchant(this.id, merchant).subscribe(success => {
        if (success) {
          this.router.navigate(['/']);
        }
      });
    } else {
      this.merchantService.addNewMerchants(merchant).subscribe(success => {
        if (success) {
          this.router.navigate(['/']);
        }
      });
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
