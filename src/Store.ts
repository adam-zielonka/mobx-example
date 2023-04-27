import { makeAutoObservable } from "mobx";

export class CounterStore {
  constructor(public value = 0) {
    makeAutoObservable(this);
    this.value = value;
  }

  addOne = (): void => {
    this.value += 1;
  };

  add100 = (): void => {
    this.value += 100;
  };

  minusOne = (): void => {
    this.value -= 1;
  };

  minus100 = (): void => {
    this.value -= 100;
  };

  reset = (): void => {
    this.value = 0;
  };

  add = (value: string): number => {
    if (!isNaN(+value)) this.value = +value;
    return this.value;
  };
}

export class Store {
  counters: CounterStore[] = [new CounterStore()];

  constructor() {
    makeAutoObservable(this);
  }

  get canAddMoreCounters(): boolean {
    return this.counters.length < 4;
  }

  addCounter = (): void => {
    if (this.canAddMoreCounters) this.counters.push(new CounterStore());
  };

  deleteCounter = (counter: CounterStore): void => {
    this.counters = this.counters.filter(c => c !== counter);
  };
}

export const store = new Store();
