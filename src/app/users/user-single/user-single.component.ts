import { Component, EventEmitter, Input, Output } from '@angular/core';
import User from '../User';

@Component
({
  selector: 'app-user-single',
  standalone: true,
  imports: [],
  templateUrl: './user-single.component.html',
  styleUrl: './user-single.component.css'
})

export class UserSingleComponent 
{
  @Input() userData: any;
  @Output() userRemoved = new EventEmitter<number>();

  removeUser()
  {
    this.userRemoved.emit(this.userData.id);
  }
}
