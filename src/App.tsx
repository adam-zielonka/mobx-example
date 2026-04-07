import { store, CounterStore } from './Store';
import { observer } from 'mobx-react-lite';

const Counter = observer(({ counter }: { counter: CounterStore }) => {
  const { value, add, reset } = counter;

  return (
    <div className="counter">
      <span>
        <span>{value}</span>
      </span>
      <button onClick={() => add(100)}>-100</button>
      <button onClick={() => add(-1)}>-1</button>
      <button onClick={() => reset()}>0</button>
      <button onClick={() => add(+1)}>+1</button>
      <button onClick={() => add(+100)}>+100</button>
    </div>
  );
});

function App() {
  const { counters, addCounter } = store;

  return (
    <div className="app">
      {counters.map((counter, i) => (
        <Counter key={i} counter={counter} />
      ))}
      <button onClick={addCounter}>+</button>
    </div>
  );
}

export default observer(App);
