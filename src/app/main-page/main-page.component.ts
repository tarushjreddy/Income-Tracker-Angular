import { Budgetpro } from './../../shared/models/final';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  budgetItems: Budgetpro[] = new Array<Budgetpro>();

  constructor() {}

  ngOnInit(): void {}
  addItem(newItem: Budgetpro) {
    this.budgetItems.push(newItem);
  }

  deleteItem(item: Budgetpro) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
  }
}
