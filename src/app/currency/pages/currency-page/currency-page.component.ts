import { Component, OnDestroy } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-currency-page',
  templateUrl: './currency-page.component.html',
  styleUrls: ['./currency-page.component.scss']
})
export class CurrencyPageComponent implements OnDestroy {

  inputValue: number = null;
  result: number = null;
  rateMessage = '';
  oldBaseCurrency = '';
  baseCurrency = 'USD';
  convertCurrency = 'EUR';
  currencyList: string[] = ['USD', 'GBP', 'EUR', 'CAD', 'AUD'];
  currencyListToConvert: string[] = ['GBP', 'EUR', 'CAD', 'AUD'];

  private unsubscribe$ = new Subject();

  constructor(private currencyService: CurrencyService) { }

  resetConvertList(event): void {
    const idx = this.currencyList.indexOf(event.value);
    this.currencyListToConvert = [...this.currencyList];
    this.currencyListToConvert.splice(idx, 1);
    if (event.value === this.convertCurrency) {
      this.convertCurrency = this.oldBaseCurrency;
    }
    this.getRate();
  }

  setOldCurrency(): void {
    this.oldBaseCurrency = this.baseCurrency;
  }

  getRate(): void {
    if (this.inputValue) {
      this.currencyService.getCurrencyRates(this.baseCurrency, this.convertCurrency)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(
          (rate: number) => {
            this.result = Math.round(this.inputValue * rate * 100) / 100;
            this.rateMessage = `1 ${this.baseCurrency} = ${rate} ${this.convertCurrency}`;
          }
        );
    } else {
      this.result = null;
      this.rateMessage = '';
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
