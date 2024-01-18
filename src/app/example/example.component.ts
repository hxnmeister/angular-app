import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: 
  [
    NgFor,
    NgIf,
    NgClass,
    FormsModule, //для двостронней связи NgModule
  ],
  // template: '<h1>Hello</h1>',
  // styles: [`h1{color: red} p{color: #333}`],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})

export class ExampleComponent 
{
  user = 'Tom';
  fruits = ['Orange', 'Banana', 'Coconut'];
  count = 0;
  isBg = false;

  increment()
  {
    ++this.count;
  }

  decrement()
  {
    --this.count;
  }
}
