import { describe, it, test, expect } from 'vitest'
import { CounterStore, Store } from './Store'

describe('CounterStore', () => {
  test('new counter', () => {
    const counter = new CounterStore()
    expect(counter.value).toBe(0)
  })

  test('add one to counter', () => {
    const counter = new CounterStore()
    counter.addOne()
    expect(counter.value).toBe(1)
    counter.addOne()
    expect(counter.value).toBe(2)
  })

  test('add 100 to counter', () => {
    const counter = new CounterStore()
    counter.add100()
    expect(counter.value).toBe(100)
    counter.add100()
    expect(counter.value).toBe(200)
  })

  test('minus one to counter', () => {
    const counter = new CounterStore()
    counter.minusOne()
    expect(counter.value).toBe(-1)
    counter.minusOne()
    expect(counter.value).toBe(-2)
  })

  test('minus 100 to counter', () => {
    const counter = new CounterStore()
    counter.minus100()
    expect(counter.value).toBe(-100)
    counter.minus100()
    expect(counter.value).toBe(-200)
  })

  test('reset counter', () => {
    const counter = new CounterStore()
    counter.add100()
    expect(counter.value).toBe(100)
    counter.reset()
    expect(counter.value).toBe(0)
  })

  test('add value to counter', () => {
    const counter = new CounterStore()
    counter.add('123')
    expect(counter.value).toBe(123)
    counter.add('321')
    expect(counter.value).toBe(321)
  })

  test('add non number value to counter', () => {
    const counter = new CounterStore()
    counter.add('aaa')
    expect(counter.value).toBe(0)
    counter.add('-')
    expect(counter.value).toBe(0)
  })
})

describe('Store', () => {
  test('new store', () => {
    const store = new Store()
    expect(store.counters.length).toBe(1)
    expect(store.canAddMoreCounters).toBe(true)
    expect(store.sum).toBe(0)
  })

  it('add and delete counter', () => {
    const store = new Store()
    expect(store.counters.length).toBe(1)
    expect(store.canAddMoreCounters).toBe(true)
    expect(store.sum).toBe(0)

    store.addCounter()
    expect(store.counters.length).toBe(2)
    expect(store.canAddMoreCounters).toBe(true)
    expect(store.sum).toBe(0)

    store.addCounter()
    expect(store.counters.length).toBe(3)
    expect(store.canAddMoreCounters).toBe(true)
    expect(store.sum).toBe(0)

    store.addCounter()
    expect(store.counters.length).toBe(4)
    expect(store.canAddMoreCounters).toBe(false)
    expect(store.sum).toBe(0)

    store.addCounter()
    expect(store.counters.length).toBe(4)
    expect(store.canAddMoreCounters).toBe(false)
    expect(store.sum).toBe(0)

    store.deleteCounter(store.counters[0])
    expect(store.counters.length).toBe(3)
    expect(store.canAddMoreCounters).toBe(true)
    expect(store.sum).toBe(0)
  })

  it('sum counter', () => {
    const store = new Store()
    store.addCounter()
    expect(store.sum).toBe(0)

    store.counters[0].add('123')
    store.counters[1].add('321')
    expect(store.sum).toBe(444)
  })
})
