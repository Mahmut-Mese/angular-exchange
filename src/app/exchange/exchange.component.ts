import { Component, OnInit } from '@angular/core';
import { ExApiService } from '../ex-api.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss'],
  providers: [ExApiService],
})
export class ExchangeComponent implements OnInit {
  todos: any;
  rates: any;
  breakpoint: number;
  base: string;
  currentDate: any;

  constructor(private exService: ExApiService) {}
  ngOnInit() {
    this.breakpoint = window.innerWidth <= 800 ? 1 : 6;

    this.getAllCurrency();
  }
  getAllCurrency() {
    this.exService.getAllitems().subscribe((items) => {
      this.todos = items;
      this.rates = this.todos.rates;
      this.base = this.todos.base;
      this.currentDate = this.todos.date;
    });
  }
  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 800 ? 1 : 6;
  }
}
