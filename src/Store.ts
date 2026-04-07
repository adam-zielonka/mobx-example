import { makeAutoObservable } from 'mobx';

export class CounterStore {
  value = 0;

  constructor() {
    makeAutoObservable(this);
  }

  reset = () => {
    this.value = 0;
  };

  add = (value: string | number) => {
    if (!isNaN(+value)) this.value += +value;
    return this.value;
  };
}

export class Store {
  counters: CounterStore[] = [new CounterStore()];

  constructor() {
    makeAutoObservable(this);
  }

  addCounter = (): void => {
    this.counters.push(new CounterStore());
  };
}

export const store = new Store();
