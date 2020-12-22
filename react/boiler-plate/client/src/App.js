import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './component/views/LandingPage/LandingPage.js';
import LodingPage from './component/views/LoginPage/LoginPage.js';
import ResisterPage from './component/views/ResisterPage/ResisterPage.js';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LodingPage} />
          <Route exact path="/resister" component={ResisterPage} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;