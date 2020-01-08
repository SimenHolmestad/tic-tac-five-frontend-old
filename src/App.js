import React from 'react';
import Game from './components/Game';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path='/play/:gameId' component={ Game }/>
    </Router>
  );
}

export default App;
