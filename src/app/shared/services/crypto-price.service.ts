import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {zip} from 'rxjs';

@Injectable()
export class CryptoPriceService {
  constructor(private httpClient: HttpClient) {}

  getBtcPrice(){
    return this.httpClient.get('https://api.coinmarketcap.com/v2/ticker/1/');
  }

  getEthPrice() {
    return this.httpClient.get('https://api.coinmarketcap.com/v2/ticker/1027/');
  }

  getBchPrice() {
    return this.httpClient.get('https://api.coinmarketcap.com/v2/ticker/1831/');
  }

  getCryptoPrice() {
    return zip(this.getBtcPrice(),
      this.getBchPrice(),
      this.getEthPrice());
  }
}
