// import { useState } from 'react'
import './App.css'
import { OperationTableView } from './features/operationTable/OperationTableView'
import store from './app/store'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>

    <div className="App">
      <h1>Welcome to Nerrd</h1>
      <OperationTableView />
    </div>
    </Provider>
  );
}

export default App;
