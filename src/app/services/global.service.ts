import { inject, Injectable, signal } from '@angular/core';
import { HelperService } from './helper.service';

@Injectable({ providedIn: 'root' })
export class GlobalService {
  readonly id = crypto.randomUUID();
  h = inject(HelperService);

  msg = signal('Default from Global Service');

  constructor() {
    console.group(
      '%cGlobalService',
      'color: red; font-family:serif; font-size: 20px',
    );
    console.warn('Global Service Created');
    console.log(`Id is ${this.id}`);
    console.groupEnd();
  }
}
