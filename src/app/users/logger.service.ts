import { Injectable } from '@angular/core';

@Injectable
({
  providedIn: 'root'
})
export class LoggerService 
{
  write(message: string)
  {
    console.log(message);
  }
}
