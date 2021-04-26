import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
  return (
    <Wrapper>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/page-1">Page 1</NavLink>
      <NavLink to="/page-2">Page 2</NavLink>
    </Wrapper>
  );
}
