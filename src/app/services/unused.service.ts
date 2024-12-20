import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UnusedService {
  constructor() {
    console.log('UNUSED SERVICE CREATED');
  }
}
