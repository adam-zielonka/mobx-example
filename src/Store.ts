import { makeAutoObservable } from 'mobx'

export class CounterStore {
  value = 0

  constructor() {
    makeAutoObservable(this)
  }

  addOne = (): void => {
    this.value += 1
  }

  add100 = (): void => {
    this.value += 100
  }

  minusOne = (): void => {
    this.value -= 1
  }

  minus100 = (): void => {
    this.value -= 100
  }

  reset = (): void => {
    this.value = 0
  }
}

export class Store {
  counters: CounterStore[] = [new CounterStore()]

  constructor() {
    makeAutoObservable(this)
  }

  get isTooMatchCounters(): boolean {
    return this.counters.length < 4
  }

  addCounter = (): void => {
    if (this.isTooMatchCounters) this.counters.push(new CounterStore())
  }

  deleteCounter = (counter: CounterStore): void => {
    this.counters = this.counters.filter(c => c !== counter)
  }
}

export const store = new Store()

declare global { interface Window { store: Store; }}
window.store = store
