import { Injectable } from '@angular/core';
import User from './User';
import users from './UsersData';
import { LoggerService } from './logger.service';

@Injectable
({
  providedIn: 'root'
})

export class UserService 
{
  private users: User[] = [];

  constructor(private logger: LoggerService) 
  {
    this.users = users;
  }

  getUsers(): User[]
  {
    this.logger.write("Add User");
    return this.users;
  }

  addUser(data: any)
  {
    this.users.push({...data, id: new Date().getTime()});
  }

  removeUser(id: number)
  {
    this.users = this.users.filter( (user) => user.id !== id );
  }
}
