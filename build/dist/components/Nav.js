import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import {NavLink} from "../../_snowpack/pkg/react-router-dom.js";
const Wrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
  a {
    margin-right: 12px;
    &[aria-current="page"] {
      font-weight: 600;
      text-decoration: underline;
    }
  }
`;
export default function Nav() {
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(NavLink, {
    exact: true,
    to: "/"
  }, "Home"), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/page-1"
  }, "Page 1"), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/page-2"
  }, "Page 2"));
}
