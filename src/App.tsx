import { observer } from 'mobx-react-lite'
import React from 'react'
import { CounterStore, store } from './Store'

const Counter = observer(({ counter, onDelete }:{ counter: CounterStore, onDelete: () => void }): JSX.Element => {
  const { value, minus100, minusOne, reset, addOne, add100, add } = counter

  return <div className='counter'>
    <span>
      <input value={value} onChange={(e) => add(e.target.value)}/>
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
  const { counters, addCounter, canAddMoreCounters, deleteCounter, sum } = store

  return <div className='app'>
    {/* <div className='all'>{sum}</div> */}
    <div className='all counter'><span><span>{sum}</span></span></div>
    {counters.map((counter, i) => <Counter key={i} counter={counter} 
      onDelete={() => deleteCounter(counter)}
    />)}
    {canAddMoreCounters && <button onClick={() => addCounter()}>+</button>}
    <footer>
      Source code: <a href='https://gitlab.com/adam-zielonka-pro/mobx-example'>
        https://gitlab.com/adam-zielonka-pro/mobx-example
      </a>
    </footer>
  </div>
}
export default observer(App)
