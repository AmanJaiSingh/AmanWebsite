import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About, Home, Search, Error, SignIN } from "./Components";

function App() {
  return (
    <>
      <div>
        <Router>
          <Switch>
            <Route path="/About" exact component={About} />
            <Route path="/" exact component={Home} />
            <Route path="/Search" exact component={Search} />
            <Route path="/SignIn" exact component={SignIN} />
            <Route component={Error} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
