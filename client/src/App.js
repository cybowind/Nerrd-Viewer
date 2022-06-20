import './App.css'
import store from './app/store'
import { Provider } from 'react-redux';
import { OperationView } from './features/operation/OperationView';
import { ThingView } from './features/thing/ThingView';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Welcome to Nerrd</h1>
        <OperationView />
        <ThingView />
      </div>
    </Provider>
  );
}

export default App;
