import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Infopage from "./pages/Infopage";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/info" component={Infopage} />
      </Switch>
    </div>
  );
}

export default App;
