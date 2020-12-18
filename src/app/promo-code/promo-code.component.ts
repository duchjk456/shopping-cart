import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-promo-code',
  templateUrl: './promo-code.component.html',
  styleUrls: ['./promo-code.component.scss']
})
export class PromoCodeComponent implements OnInit {
  @Input() subTotal: number;
  constructor() {
  }

  ngOnInit(): void {
  }

}
