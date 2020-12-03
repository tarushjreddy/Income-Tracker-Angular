import { Budgetpro } from './../../shared/models/final';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  @Input() item: Budgetpro;

  constructor() {}

  ngOnInit(): void {}
  onSubmitted(updatedItem: Budgetpro) {}
}
