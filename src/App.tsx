import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { observer } from "mobx-react";
import store from "./store";
import * as ROUTES from "./Route";
import "./App.css";
import Header from "./header/Header";
import Homepage from "./content/homepage/Homepage";
import Aboutme from "./content/aboutme/Aboutme";
import Sample from "./content/sample/Sample";
import Footer from "./footer/Footer";

//=======================================================
// Main app.
//=======================================================
@observer
class App extends Component<any> {
  render() {
    return (
      <Router basename="/web-app-proj">
        <div className="App">
          <React.Fragment>
            <Header />
            <Switch>
              <Route
                exact
                path={ROUTES.LANDING}
                render={() => <Redirect to={ROUTES.HOMEPAGE} />}
              />
              <Route
                path={ROUTES.HOMEPAGE}
                render={() => <Homepage state={store.homepageState} />}
              />
              <Route
                path={ROUTES.ABOUTME}
                render={() => <Aboutme state={store.aboutmeState} />}
              />
              <Route
                path={ROUTES.SAMPLE}
                render={() => <Sample state={store.sampleState} />}
              />
              <Route render={() => <Redirect to={ROUTES.HOMEPAGE} />} />
            </Switch>
            <Footer />
          </React.Fragment>
        </div>
      </Router>
    );
  }
}

export default App;
