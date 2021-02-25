import { observer } from 'mobx-react-lite'
import React from 'react'
import { counter } from './Store'

const Counter = observer((): JSX.Element => {
  const { value, minus100, minusOne, reset, addOne, add100 } = counter

  return <div className='counter'>
    <span>{value}</span>
    <button onClick={() => minus100()} >-100</button>
    <button onClick={() => minusOne()} >-1</button>
    <button onClick={() => reset()} >0</button>
    <button onClick={() => addOne()} >+1</button>
    <button onClick={() => add100()} >+100</button>
  </div>
})

const App = (): JSX.Element => {
  return <div className='app'>
    <Counter/>
  </div>
}
export default App
