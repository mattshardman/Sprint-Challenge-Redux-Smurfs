import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  box-sizing: border-box;
  height: 80px;
  width: 100%;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">Home</Link>
      <Link to="/add">Add a smurf</Link>
    </HeaderWrapper>
  );
}

export default Header;
