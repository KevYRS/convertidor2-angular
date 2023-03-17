import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.scss']
})
export class ConvertidorComponent {
  amount: number = 0;
  IGot: string = "USD";
  IWant: string = "EUR";
  Total: number = 0;

  //array 
  money: string[] = ['USD', 'EUR', 'GBP', 'CHF', 'CAD', 'JPY', 'INR', 'AUD', 'RUB', 'MXN', 'BRL', 'PHP', 'IDR'];
  constructor() {

  }
  ngOnInit() {

  }

  convertir() {
    if (this.amount > 0) {
      switch (this.IGot) {
        case 'USD':
          if (this.IWant === 'USD') {
            this.Total = this.amount;
          }
          if (this.IWant === 'EUR') {
            this.Total = this.amount * 0.93;
          }
          if (this.IWant === 'GBP') {
            this.Total = this.amount * 0.82;
          }
          if (this.IWant === 'CHF') {
            this.Total = this.amount * 0.92739799;
          }
          if (this.IWant === 'CAD') {
            this.Total = this.amount * 1.3801684;
          }
          if (this.IWant === 'JPY') {
            this.Total = this.amount * 132.78188;
          }
          if (this.IWant === 'INR') {
            this.Total = this.amount * 82.872563;
          }
          if (this.IWant === 'AUD') {
            this.Total = this.amount * 1.5143975;
          }
          if (this.IWant === 'RUB') {
            this.Total = this.amount * 76.170626;
          }
          if (this.IWant === 'MXN') {
            this.Total = this.amount * 19.04735;
          }
          if (this.IWant === 'BRL') {
            this.Total = this.amount * 5.3247336;
          }
          if (this.IWant === 'PHP') {
            this.Total = this.amount * 55.049147;
          }
          if (this.IWant === 'IDR') {
            this.Total = this.amount * 15469.807;
          }
          break;

        case 'EUR':
          if (this.IWant === 'USD') {
            this.Total = this.amount * 1.07;
          }
          if (this.IWant === 'EUR') {
            this.Total = this.amount;
          }
          if (this.IWant === 'GBP') {
            this.Total = this.amount * 0.88;
          }
          if (this.IWant === 'CHF') {
            this.Total = this.amount * 0.977550;
          }
          if (this.IWant === 'CAD') {
            this.Total = this.amount * 1.4555972;
          }
          if (this.IWant === 'JPY') {
            this.Total = this.amount * 139.98124;
          }
          if (this.IWant === 'INR') {
            this.Total = this.amount * 87.402907;
          }
          if (this.IWant === 'AUD') {
            this.Total = this.amount * 1.5988424;
          }
          if (this.IWant === 'RUB') {
            this.Total = this.amount * 80.387392;
          }
          if (this.IWant === 'MXN') {
            this.Total = this.amount * 20.092989;
          }
          if (this.IWant === 'BRL') {
            this.Total = this.amount * 5.6150741;
          }
          if (this.IWant === 'PHP') {
            this.Total = this.amount * 58.044138;
          }
          if (this.IWant === 'IDR') {
            this.Total = this.amount * 16287.175;
          }
          break;

        case 'GBP':
          if (this.IWant === 'USD') {
            this.Total = this.amount * 1.2135;
          }
          if (this.IWant === 'EUR') {
            this.Total = this.amount * 1.13;
          }
          if (this.IWant === 'GBP') {
            this.Total = this.amount;
          }
          if (this.IWant === 'CHF') {
            this.Total = this.amount * 1.1140685;
          }
          if (this.IWant === 'CAD') {
            this.Total = this.amount * 1.6588488;
          }
          if (this.IWant === 'JPY') {
            this.Total = this.amount * 159.52745;
          }
          if (this.IWant === 'INR') {
            this.Total = this.amount * 82.872563;
          }
          if (this.IWant === 'AUD') {
            this.Total = this.amount * 1.5143975;
          }
          if (this.IWant === 'RUB') {
            this.Total = this.amount * 76.170626;
          }
          if (this.IWant === 'MXN') {
            this.Total = this.amount * 19.04735;
          }
          if (this.IWant === 'BRL') {
            this.Total = this.amount * 5.3247336;
          }
          if (this.IWant === 'PHP') {
            this.Total = this.amount * 55.049147;
          }
          if (this.IWant === 'IDR') {
            this.Total = this.amount * 15469.807;
          }
          break;

        case 'CHF':
          if (this.IWant === 'USD') {
            this.Total = this.amount * 1.0787556;
          }
          if (this.IWant === 'EUR') {
            this.Total = this.amount * 1.0229653;
          }
          if (this.IWant === 'GBP') {
            this.Total = this.amount * 0.89762575;
          }
          if (this.IWant === 'CHF') {
            this.Total = this.amount;
          }
          if (this.IWant === 'CAD') {
            this.Total = this.amount * 1.4890254;
          }
          if (this.IWant === 'JPY') {
            this.Total = this.amount * 143.19595;
          }
          if (this.IWant === 'INR') {
            this.Total = this.amount * 89.41014;
          }
          if (this.IWant === 'AUD') {
            this.Total = this.amount * 1.6355603;
          }
          if (this.IWant === 'RUB') {
            this.Total = this.amount * 82.233512;
          }
          if (this.IWant === 'MXN') {
            this.Total = this.amount * 20.55443;
          }
          if (this.IWant === 'BRL') {
            this.Total = this.amount * 5.7440259;
          }
          if (this.IWant === 'PHP') {
            this.Total = this.amount * 59.377138;
          }
          if (this.IWant === 'IDR') {
            this.Total = this.amount * 16661.215;
          }
          break;

        case 'CAD':
          if (this.IWant === 'USD') {
            this.Total = this.amount * 0.72447091;
          }
          if (this.IWant === 'EUR') {
            this.Total = this.amount * 0.687003;
          }
          if (this.IWant === 'GBP') {
            this.Total = this.amount * 0.60282768;
          }
          if (this.IWant === 'CHF') {
            this.Total = this.amount * 0.671580;
          }
          if (this.IWant === 'CAD') {
            this.Total = this.amount;
          }
          if (this.IWant === 'JPY') {
            this.Total = this.amount * 96.167565;
          }
          if (this.IWant === 'INR') {
            this.Total = this.amount * 60.04608;
          }
          if (this.IWant === 'AUD') {
            this.Total = this.amount * 1.0984099;
          }
          if (this.IWant === 'RUB') {
            this.Total = this.amount * 55.226398;
          }
          if (this.IWant === 'MXN') {
            this.Total = this.amount * 13.803948;
          }
          if (this.IWant === 'BRL') {
            this.Total = this.amount * 3.8575741;
          }
          if (this.IWant === 'PHP') {
            this.Total = this.amount * 39.87651;
          }
          if (this.IWant === 'IDR') {
            this.Total = this.amount * 11189.342;
          }
          break;

        case 'JPY':
          if (this.IWant === 'USD') {
            this.Total = this.amount * 0.0075334226;
          }
          if (this.IWant === 'EUR') {
            this.Total = this.amount * 0.00714381;
          }
          if (this.IWant === 'GBP') {
            this.Total = this.amount * 0.0062685135;
          }
          if (this.IWant === 'CHF') {
            this.Total = this.amount * 0.00698344;
          }
          if (this.IWant === 'CAD') {
            this.Total = this.amount * 0.0103985;
          }
          if (this.IWant === 'JPY') {
            this.Total = this.amount;
          }
          if (this.IWant === 'INR') {
            this.Total = this.amount * 0.62439014;
          }
          if (this.IWant === 'AUD') {
            this.Total = this.amount * 0.011421834;
          }
          if (this.IWant === 'RUB') {
            this.Total = this.amount * 0.57427261;
          }
          if (this.IWant === 'MXN') {
            this.Total = this.amount * 0.14354058;
          }
          if (this.IWant === 'BRL') {
            this.Total = this.amount * 0.040113047;
          }
          if (this.IWant === 'PHP') {
            this.Total = this.amount * 0.41465655;
          }
          if (this.IWant === 'IDR') {
            this.Total = this.amount * 116.35255;
          }
          break;

        case 'INR':
          if (this.IWant === 'USD') {
            this.Total = this.amount * 0.012065249;
          }
          if (this.IWant === 'EUR') {
            this.Total = this.amount * 0.0114413;
          }
          if (this.IWant === 'GBP') {
            this.Total = this.amount * 0.010039418;
          }
          if (this.IWant === 'CHF') {
            this.Total = this.amount * 0.0111844;
          }
          if (this.IWant === 'CAD') {
            this.Total = this.amount * 0.0166539;
          }
          if (this.IWant === 'JPY') {
            this.Total = this.amount * 1.60156;
          }
          if (this.IWant === 'INR') {
            this.Total = this.amount;
          }
          if (this.IWant === 'AUD') {
            this.Total = this.amount * 0.018292783;
          }
          if (this.IWant === 'RUB') {
            this.Total = this.amount * 0.91973363;
          }
          if (this.IWant === 'MXN') {
            this.Total = this.amount * 0.22988925;
          }
          if (this.IWant === 'BRL') {
            this.Total = this.amount * 0.064243563;
          }
          if (this.IWant === 'PHP') {
            this.Total = this.amount * 0.66409848;
          }
          if (this.IWant === 'IDR') {
            this.Total = this.amount * 186.34592;
          }
          break;

        case 'AUD':
          if (this.IWant === 'USD') {
            this.Total = this.amount * 0.65956333;
          }
          if (this.IWant === 'EUR') {
            this.Total = this.amount * 0.625453;
          }
          if (this.IWant === 'GBP') {
            this.Total = this.amount * 0.54881849;
          }
          if (this.IWant === 'CHF') {
            this.Total = this.amount * 0.611411;
          }
          if (this.IWant === 'CAD') {
            this.Total = this.amount * 0.910407;
          }
          if (this.IWant === 'JPY') {
            this.Total = this.amount * 87.5516;
          }
          if (this.IWant === 'INR') {
            this.Total = this.amount * 54.6664;
          }
          if (this.IWant === 'AUD') {
            this.Total = this.amount;
          }
          if (this.IWant === 'RUB') {
            this.Total = this.amount * 50.278495;
          }
          if (this.IWant === 'MXN') {
            this.Total = this.amount * 12.56721;
          }
          if (this.IWant === 'BRL') {
            this.Total = this.amount * 3.5119621;
          }
          if (this.IWant === 'PHP') {
            this.Total = this.amount * 36.303851;
          }
          if (this.IWant === 'IDR') {
            this.Total = this.amount * 10186.854;
          }
          break;

        case 'RUB':
          if (this.IWant === 'USD') {
            this.Total = this.amount * 0.013118199;
          }
          if (this.IWant === 'EUR') {
            this.Total = this.amount * 0.0124398;
          }
          if (this.IWant === 'GBP') {
            this.Total = this.amount * 0.010915571;
          }
          if (this.IWant === 'CHF') {
            this.Total = this.amount * 0.0121605;
          }
          if (this.IWant === 'CAD') {
            this.Total = this.amount * 0.0181073;
          }
          if (this.IWant === 'JPY') {
            this.Total = this.amount * 1.74133;
          }
          if (this.IWant === 'INR') {
            this.Total = this.amount * 1.08727;
          }
          if (this.IWant === 'AUD') {
            this.Total = this.amount * 0.0198892;
          }
          if (this.IWant === 'RUB') {
            this.Total = this.amount;
          }
          if (this.IWant === 'MXN') {
            this.Total = this.amount * 0.24995199;
          }
          if (this.IWant === 'BRL') {
            this.Total = this.amount * 0.069850184;
          }
          if (this.IWant === 'PHP') {
            this.Total = this.amount * 0.72205524;
          }
          if (this.IWant === 'IDR') {
            this.Total = this.amount * 202.60857;
          }
          break;

        case 'MXN':
          if (this.IWant === 'USD') {
            this.Total = this.amount * 0.052482876;
          }
          if (this.IWant === 'EUR') {
            this.Total = this.amount * 0.0497686;
          }
          if (this.IWant === 'GBP') {
            this.Total = this.amount * 0.04367067;
          }
          if (this.IWant === 'CHF') {
            this.Total = this.amount * 0.0486513;
          }
          if (this.IWant === 'CAD') {
            this.Total = this.amount * 0.0724430;
          }
          if (this.IWant === 'JPY') {
            this.Total = this.amount * 6.96667;
          }
          if (this.IWant === 'INR') {
            this.Total = this.amount * 4.34992;
          }
          if (this.IWant === 'AUD') {
            this.Total = this.amount * 0.0795722;
          }
          if (this.IWant === 'RUB') {
            this.Total = this.amount * 4.00077;
          }
          if (this.IWant === 'MXN') {
            this.Total = this.amount;
          }
          if (this.IWant === 'BRL') {
            this.Total = this.amount * 0.2794544;
          }
          if (this.IWant === 'PHP') {
            this.Total = this.amount * 2.8887757;
          }
          if (this.IWant === 'IDR') {
            this.Total = this.amount * 810.58994;
          }
          break;

        case 'BRL':
          if (this.IWant === 'USD') {
            this.Total = this.amount * 0.18780479;
          }
          if (this.IWant === 'EUR') {
            this.Total = this.amount * 0.178092;
          }
          if (this.IWant === 'GBP') {
            this.Total = this.amount * 0.15627119;
          }
          if (this.IWant === 'CHF') {
            this.Total = this.amount * 0.174094;
          }
          if (this.IWant === 'CAD') {
            this.Total = this.amount * 0.259230;
          }
          if (this.IWant === 'JPY') {
            this.Total = this.amount * 24.9295;
          }
          if (this.IWant === 'INR') {
            this.Total = this.amount * 15.5658;
          }
          if (this.IWant === 'AUD') {
            this.Total = this.amount * 0.284741;
          }
          if (this.IWant === 'RUB') {
            this.Total = this.amount * 14.3164;
          }
          if (this.IWant === 'MXN') {
            this.Total = this.amount * 3.5784014;
          }
          if (this.IWant === 'BRL') {
            this.Total = this.amount;
          }
          if (this.IWant === 'PHP') {
            this.Total = this.amount * 10.337199;
          }
          if (this.IWant === 'IDR') {
            this.Total = this.amount * 2900.6162;
          }
          break;

        case 'PHP':
          if (this.IWant === 'USD') {
            this.Total = this.amount * 0.018167861;
          }
          if (this.IWant === 'EUR') {
            this.Total = this.amount * 0.0172283;
          }
          if (this.IWant === 'GBP') {
            this.Total = this.amount * 0.015117363;
          }
          if (this.IWant === 'CHF') {
            this.Total = this.amount * 0.0168415;
          }
          if (this.IWant === 'CAD') {
            this.Total = this.amount * 0.0250774;
          }
          if (this.IWant === 'JPY') {
            this.Total = this.amount * 2.41163;
          }
          if (this.IWant === 'INR') {
            this.Total = this.amount * 1.50580;
          }
          if (this.IWant === 'AUD') {
            this.Total = this.amount * 0.0275453;
          }
          if (this.IWant === 'RUB') {
            this.Total = this.amount * 1.38494;
          }
          if (this.IWant === 'MXN') {
            this.Total = this.amount * 0.34616741;
          }
          if (this.IWant === 'BRL') {
            this.Total = this.amount * 0.0967380;
          }
          if (this.IWant === 'PHP') {
            this.Total = this.amount;
          }
          if (this.IWant === 'IDR') {
            this.Total = this.amount * 280.59982;
          }
          break;

        case 'IDR':
          if (this.IWant === 'USD') {
            this.Total = this.amount * 0.000064746517;
          }
          if (this.IWant === 'EUR') {
            this.Total = this.amount * 0.0000613980;
          }
          if (this.IWant === 'GBP') {
            this.Total = this.amount * 0.000053875169;
          }
          if (this.IWant === 'CHF') {
            this.Total = this.amount * 0.0000600196;
          }
          if (this.IWant === 'CAD') {
            this.Total = this.amount * 0.0000893708;
          }
          if (this.IWant === 'JPY') {
            this.Total = this.amount * 0.00859457;
          }
          if (this.IWant === 'INR') {
            this.Total = this.amount * 0.00536636;
          }
          if (this.IWant === 'AUD') {
            this.Total = this.amount * 0.0000981657;
          }
          if (this.IWant === 'RUB') {
            this.Total = this.amount * 0.00493563;
          }
          if (this.IWant === 'MXN') {
            this.Total = this.amount * 0.00123367;
          }
          if (this.IWant === 'BRL') {
            this.Total = this.amount * 0.000344754;
          }
          if (this.IWant === 'PHP') {
            this.Total = this.amount * 0.0035637941;
          }
          if (this.IWant === 'IDR') {
            this.Total = this.amount;
          }
          break;
      }
    }
  }
}
