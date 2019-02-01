import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { Home, Navi, Gallary, Aboutus, Services, Footer } from "./components";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app-main">
        <div className="app-navi">
          <Navi />
        </div>
        <div className="app-body">
          <Route exact path="/hammonds/home" render={() => <Home />} />
          <Route exact path="/hammonds/gallary" render={() => <Gallary />} />
          <Route exact path="/hammonds/aboutus" render={() => <Aboutus />} />
          <Route exact path="/hammonds/services" render={() => <Services />} />
          <Route path="/*" render={() => <Redirect to="/hammonds/home" />} />
        </div>
        <div className="app-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
