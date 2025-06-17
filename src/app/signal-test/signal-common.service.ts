import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalCommonService {

  // countHouse = signal<number[]>([]);
  countHouse = signal(0);

  countries = signal<string[]>([]);

  addCountry(name: string) {
    this.countries.update(prev => [...prev, name]);
  }
}
