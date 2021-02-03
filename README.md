# rn-mobx-demo

Add **Mobx** (A unidirectional data flow helper) to React Native project

- react-native: 0.63.4
- react: 16.13.1


## Add plugins for decorators

```
yarn add -D @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @babel/plugin-transform-flow-strip-types
```

## Setup Babel

```
{
  plugins: [
    ['@babel/plugin-transform-flow-strip-types'],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['@babel/plugin-proposal-class-properties', {loose: true}],
  ],
}
```

## Create a store

```
class Store {
  @observable
  data = [];

  constructor() {
    // Important, Fix RN can't re-render
    makeAutoObservable(this);
  }

  @computed get getDataSize() {
    return this.data.length;
  }

  @action fetchData = () => {
    /* ... */
  };
}
```

## Add Provider to App

```
import { Provider } from 'mobx-react';
import * as stores from './src/store';

const App = () => (
  <Provider {...stores}>
    <Root />
  </Provider>
);
```

## Inject to Component properties
```
@inject(store1, store2)
@observer
/* Class-based component or functional component */
```


