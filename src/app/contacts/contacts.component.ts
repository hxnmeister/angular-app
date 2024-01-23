import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: 
  [
    FormsModule,
    NgFor,
    NgIf
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})

export class ContactsComponent 
{
  userName = '';
  email = '';
  message = '';
  phoneNumbers = [''];

  sendEmail(form: NgForm) 
  {
    console.log(form);
  }

  addPhoneNumber()
  {
    this.phoneNumbers.push('');
  }

  removePhoneNumber(index: number)
  {
    this.phoneNumbers.splice(index, 1);
  }

  trackByFn(index: number)
  {
    return index;
  }
}
