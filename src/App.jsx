import React, { Fragment, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Reboot } from "styled-reboot";

const Home = lazy(() => import("./pages/Home"));
const Page1 = lazy(() => import("./pages/Page1"));
const Page2 = lazy(() => import("./pages/Page2"));

function App() {
  return (
    <Fragment>
      <Reboot />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/page-1" component={Page1} />
            <Route path="/page-2" component={Page2} />
          </Switch>
        </Suspense>
      </Router>
    </Fragment>
  );
}

export default App;
