// import { EventEmitter } from 'protractor';
import { Budgetpro } from './../../../shared/models/final';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Input() item: Budgetpro;
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
  onCardClick() {
    this.cardClick.emit();
  }
  onxButttonClick() {
    this.xButtonClick.emit();
  }
}
