# Mobx example

This project exist to show my friends that using Mobx is easy.

Demo: [mobx-example.adamzielonka.pro](https://mobx-example.adamzielonka.pro/)

## How to use mobx

You can find more in documentation [mobx.js.org/react-integration.html](https://mobx.js.org/react-integration.html)

## How I use mobx

### Installation

Firstly I do is adding mobx and mobx-react-lite to my project

```bash
$ pnpm add mobx mobx-react-lite
```

### Create main store

Next I create store that will be contain all stores. If I have a lot of store classes, I create main store in `./src/store/Store.ts`, if not I just create file in src folder: `./src/Store.ts`:

```ts
import { makeAutoObservable } from 'mobx'

export class Store {
  constructor() {
    makeAutoObservable(this)
  }
}

export const store = new Store()

```

I also make this store visible in browser by adding this to lines to end of main store file:

```ts
declare global { interface Window { store: Store; }}
window.store = store
```

### Add some fields, actions and computed value

An empty store is useless so I filled it with a few things:

```ts
import { makeAutoObservable } from 'mobx'

export class Store {
  counter = 0 // I am field

  constructor() {
    makeAutoObservable(this)
  }

  // I am computed value
  get doubleCounter(): number {
    return counter * 2
  }

  // I am action
  counterUp = (): void => {
    this.counter += 1
  }
}
```

### Use store in react

```tsx
import React from 'react'
import { observer } from 'mobx-react-lite'
import { store } from './Store'

const App = (): JSX.Element => {
  const { counter, doubleCounter, counterUp } = store

  return <div className='app'>
    <p>Counter: {counter}</p>
    <p>Double counter: {doubleCounter}</p>
    <p><button onClick={() => counterUp()} >+1</button></p>
  </div>
}

// App will be re rendered if counter or doubleCounter change
export default observer(App)

```

### Enjoying a working application

The best part of creating a working application is that make me happy.
