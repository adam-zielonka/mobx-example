import React from 'react'

const Counter = (): JSX.Element => {

  return <div className='counter'>
    <span>0</span>
    <button>-100</button>
    <button>-1</button>
    <button>0</button>
    <button>+1</button>
    <button>+100</button>
  </div>
}


const App = (): JSX.Element => {
  return <div className='app'>
    <Counter/>
  </div>
}
export default App
