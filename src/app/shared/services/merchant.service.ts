import {MerchantModel} from '../models/merchant.model';
import {BehaviorSubject, of, Subject} from 'rxjs';

export class MerchantService {
  merchantUpdate = new Subject<MerchantModel[]>();
  subs = new BehaviorSubject([
    {
      'uid': '1234',
      'merchant_type': 'ShirtTown',
      'item_sold': 'T-shirt',
      'amount_invoiced': 1.43219876,
      'currency_used_for_payments': 'BTC'
    }]);

  private merchants: MerchantModel[] = [
    {
      'uid': '1234',
      'merchant_type': 'ShirtTown',
      'item_sold': 'T-shirt',
      'amount_invoiced': 1.43219876,
      'currency_used_for_payments': 'BTC'
    },
    {
      'uid': '1235',
      'merchant_type': 'CrazyCups',
      'item_sold': 'Cups',
      'amount_invoiced': 2.76236751,
      'currency_used_for_payments': 'BCH'
    },
    {
      'uid': '1236',
      'merchant_type': 'GimmeGold',
      'item_sold': 'Gold bullion',
      'amount_invoiced': 10.78654328,
      'currency_used_for_payments': 'ETH'
    }
  ];

  getAllMerchants() {
    return this.merchants.slice();
  }

  addNewMerchants(merchant: MerchantModel) {
    this.merchants.push(merchant);
    this.merchantUpdate.next(this.merchants.slice());
    return of(true);
  }

  getMerchantByIndex(index: number) {
    return of(this.merchants[index]);
  }

  updateMerchant(index: number, merchant: MerchantModel) {
    this.merchants[index] = merchant;
    this.merchantUpdate.next(this.merchants.slice());
    return of(true);
  }

  deleteMerchant(index: number) {
    this.merchants.splice(index, 1);
    this.merchantUpdate.next(this.merchants.slice());
  }
}
