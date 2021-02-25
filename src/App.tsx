import { observer } from 'mobx-react-lite'
import React from 'react'
import { CounterStore, store } from './Store'

const Counter = observer(({ counter, onDelete }:{ counter: CounterStore, onDelete: () => void }): JSX.Element => {
  const { value, minus100, minusOne, reset, addOne, add100 } = counter

  return <div className='counter'>
    <span>
      <span>{value}</span>
      <button onClick={() => onDelete()} >X</button>
    </span>
    <button onClick={() => minus100()} >-100</button>
    <button onClick={() => minusOne()} >-1</button>
    <button onClick={() => reset()} >0</button>
    <button onClick={() => addOne()} >+1</button>
    <button onClick={() => add100()} >+100</button>
  </div>
})

const App = (): JSX.Element => {
  const { counters, addCounter, isTooMatchCounters, deleteCounter } = store

  return <div className='app'>
    {counters.map((counter, i) => <Counter key={i} counter={counter} 
      onDelete={() => deleteCounter(counter)}
    />)}
    {isTooMatchCounters && <button onClick={() => addCounter()}>+</button>}
  </div>
}
export default observer(App)
