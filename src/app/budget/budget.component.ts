// import { EventEmitter } from 'protractor';
import { Budgetpro } from './../../shared/models/final';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {
  @Input() budgetItems: Budgetpro[];
  @Output() delete: EventEmitter<Budgetpro> = new EventEmitter<Budgetpro>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  onDeleteButtonClicked(item: Budgetpro) {
    this.delete.emit(item);
  }
  onCardClicked(item: Budgetpro) {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '980px',
      data: item,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.update.emit({
          old: item,
          new: result,
        });
        // this.budgetItems[this.budgetItems.indexOf(item)] = result;
      }
    });
  }
}
export interface UpdateEvent {
  old: Budgetpro;
  new: Budgetpro;
}
