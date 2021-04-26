import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";

const Wrapper = styled.div``;

export default function Home() {
  return (
    <Wrapper>
      <Nav />
      <p>Home</p>
    </Wrapper>
  );
}
