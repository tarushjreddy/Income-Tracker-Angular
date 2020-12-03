import { Budgetpro } from './../../shared/models/final';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

// import { Budgetpro } from '../../shared/models';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  @Input() item: Budgetpro = new Budgetpro('', null);
  @Output() formSubmit: EventEmitter<Budgetpro> = new EventEmitter<Budgetpro>();
  constructor() {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
    console.log(form);
  }
}
