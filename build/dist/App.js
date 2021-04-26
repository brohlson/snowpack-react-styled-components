import React, {Fragment, Suspense, lazy} from "../_snowpack/pkg/react.js";
import {BrowserRouter as Router, Route, Switch} from "../_snowpack/pkg/react-router-dom.js";
import {Reboot} from "../_snowpack/pkg/styled-reboot.js";
const Home = lazy(() => import("./pages/Home.js"));
const Page1 = lazy(() => import("./pages/Page1.js"));
const Page2 = lazy(() => import("./pages/Page2.js"));
function App() {
  return /* @__PURE__ */ React.createElement(Fragment, null, /* @__PURE__ */ React.createElement(Reboot, null), /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(Suspense, {
    fallback: /* @__PURE__ */ React.createElement("div", null, "Loading...")
  }, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/",
    component: Home
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/page-1",
    component: Page1
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/page-2",
    component: Page2
  })))));
}
export default App;
