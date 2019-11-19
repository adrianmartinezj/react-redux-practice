import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'
import Landing from './routes/Landing'
import Verification from './routes/Verification'
import Confirmation from './routes/Confirmation'

function App() {
  return (
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
  );
}

export default App;
