// import { EventEmitter } from 'protractor';
import { Budgetpro } from './../../shared/models/final';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {
  @Input() budgetItems: Budgetpro[];
  @Output() delete: EventEmitter<Budgetpro> = new EventEmitter<Budgetpro>();

  constructor() {}

  ngOnInit(): void {}
  onDeleteButtonClicked(item: Budgetpro) {
    this.delete.emit(item);
  }
}
