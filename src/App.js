import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio"

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Route exact path="/"><Home /></Route>
      <Route exact path='/About'><About /></Route>
      <Route exact path='/Portfolio'><Portfolio /></Route>
    </div>
    </Router>
  );
}

export default App;
