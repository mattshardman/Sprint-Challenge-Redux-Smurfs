import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Smurfs from './Smurfs';
import AddSmurf from './AddSmurf';
import Header from './Header';

class App extends Component {
  render() {
    return (
        <Router>
          <React.Fragment>
            <Header />
            <Route exact path='/' component={Smurfs} />
            <Route path='/add' component={AddSmurf} />
          </React.Fragment>
        </Router>
    );
  }
}

export default App;
