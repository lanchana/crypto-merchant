import {getTestBed, TestBed} from '@angular/core/testing';
import {CryptoPriceService} from './crypto-price.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('CryptoPriceService', () => {
  let injector: TestBed;
  let service: CryptoPriceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CryptoPriceService,
      ]
    });

    injector = getTestBed();
    service = injector.get(CryptoPriceService);
    httpMock = injector.get(HttpTestingController);
  });

  // To make sure that there are no outstanding HttpTestingController requests
  afterEach(() => {
    httpMock.verify();
  });

  describe('GetBtcPrice', () => {
    const dummyBtcPrice = {
      'data': {
        'id': 1,
        'name': 'Bitcoin',
        'symbol': 'BTC',
        'website_slug': 'bitcoin',
        'rank': 1,
        'circulating_supply': 17008162.0,
        'total_supply': 17008162.0,
        'max_supply': 21000000.0,
        'quotes': {
          'USD': {
            'price': 9024.09,
            'volume_24h': 8765400000.0,
            'market_cap': 153483184623.0,
            'percent_change_1h': -2.31,
            'percent_change_24h': -4.18,
            'percent_change_7d': -0.47
          }
        },
        'last_updated': 1525137271
      },
      'metadata': {
        'timestamp': 1525237332,
        'error': null
      }
    };

    it('should return the bitcoin price', () => {
      service.getBtcPrice().subscribe(data => {
        expect(data).toEqual(dummyBtcPrice);
      });
      const req = httpMock.expectOne('https://api.coinmarketcap.com/v2/ticker/1/');
      expect(req.request.method).toBe('GET');
      expect(req.request.url).toBe('https://api.coinmarketcap.com/v2/ticker/1/');
      req.flush(dummyBtcPrice);
    });
  });
});
