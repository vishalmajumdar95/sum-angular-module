import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SumLibService {

  constructor() { }

  // Method to return the sum of two numbers
  addNumbers(num1: number, num2: number): number {
    return num1 + num2;
  }
}
