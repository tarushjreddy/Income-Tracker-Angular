import { Budgetpro } from './../../shared/models/final';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  @Input() items: Budgetpro;

  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public item: Budgetpro
  ) {}

  ngOnInit(): void {}
  onSubmitted(updatedItem: Budgetpro) {
    this.dialogRef.close(updatedItem);
  }
}
