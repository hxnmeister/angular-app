import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import User from '../../User';
import { UserSingleComponent } from '../../user-single/user-single.component';
import { ReactiveFormComponent } from '../../../form/reactive-form/reactive-form.component';
import { UserService } from '../../user.service';

@Component
({
  selector: 'app-user-list',
  standalone: true,
  imports: 
  [ NgFor, NgIf, UserSingleComponent, ReactiveFormComponent ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})

export class UserListComponent 
{
  usersList: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit()
  {
    this.usersList = this.userService.getUsers();
  }

  addUser(data: any)
  {
    this.userService.addUser(data);
  }

  removeUser(id: number)
  {
    this.userService.removeUser(id);
  }
}
