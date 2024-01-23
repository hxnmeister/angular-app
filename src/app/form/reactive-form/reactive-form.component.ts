import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component
({
  selector: 'app-reactive-form',
  standalone: true,
  imports: 
  [
    ReactiveFormsModule,
    NgIf,
    NgFor
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})

export class ReactiveFormComponent 
{
  isVisibleForm: boolean;
  myForm: FormGroup;
  @Output() onAdded = new EventEmitter();

  constructor()
  {
    this.isVisibleForm = false;
    this.myForm = new FormGroup
    (
      {
        name: new FormControl('Tom', [Validators.required, this.nameValidator]),
        email: new FormControl('simplemail', [Validators.required, Validators.email]),
        phones: new FormArray([ new FormControl('+380', Validators.required) ])
      }
    );
  }

  addPhone()
  {
    (<FormArray>this.myForm.controls['phones']).push(new FormControl('+389', Validators.required));
  }

  getPhones(): FormArray
  {
    return <FormArray>this.myForm.controls['phones'];
  }

  nameValidator(control: FormControl): { [s: string]: boolean } | null //квадратные скобки в этой сигнатуре не массив
  {
    return control.value === 'anonim' ? { name: true } : null;
  }

  submit()
  {
    this.onAdded.emit(this.myForm.value);
  }

  changeFormVisibility()
  {
    this.isVisibleForm = !this.isVisibleForm;
  }
}
