import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import users from '../../UsersData';
import User from '../../User';
import { UserSingleComponent } from '../../user-single/user-single.component';
import { ReactiveFormComponent } from '../../../form/reactive-form/reactive-form.component';

@Component
({
  selector: 'app-user-list',
  standalone: true,
  imports: 
  [
    NgFor,
    NgIf,
    UserSingleComponent,
    ReactiveFormComponent
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})

export class UserListComponent 
{
  usersList = users;

  addUser(data: any)
  {
    console.log(data);
    this.usersList.push({...data, id: new Date().getTime()});
  }
}
