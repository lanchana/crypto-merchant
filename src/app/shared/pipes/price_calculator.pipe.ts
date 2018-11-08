import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'PriceCalculator'
})

export class PriceCalculatorPipe implements PipeTransform{
  transform(value: number, price: number): number {
    return value * price;
  }
}
