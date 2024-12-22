import { Injectable, OnDestroy, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ZooService implements OnDestroy {
  readonly id = crypto.randomUUID();

  animals = signal(new Set<string>());
  constructor() {
    console.group(
      '%cZooService',
      'color: red; font-family:serif; font-size: 15px',
    );
    console.warn('Zoo Service Created');
    console.log(`Id is ${this.id}`);
    console.groupEnd();
  }

  ngOnDestroy(): void {
    this.animals().clear();
    console.warn('Zoo Service Destroyed: ', this.id);
  }
}
