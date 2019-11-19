import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'
import Landing from './routes/Landing'
import Verification from './routes/Verification'
import Confirmation from './routes/Confirmation'
import { Provider } from 'react-redux';
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <Switch>
          <Route exact path="/" component={Landing}/>
        </Switch>
        <Switch>
          <Route path="/verify" component={Verification} />
        </Switch>
        <Switch>
          <Route path="/confirm" component={Confirmation} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
