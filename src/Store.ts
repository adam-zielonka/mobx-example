import { makeAutoObservable } from 'mobx'

class CounterStore {
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

export const counter = new CounterStore()

declare global { interface Window { counter: CounterStore; }}
window.counter = counter
