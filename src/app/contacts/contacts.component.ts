import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  sendEmail() 
  {
    console.log(this.phoneNumbers);
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
