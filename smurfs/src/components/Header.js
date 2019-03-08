import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  box-sizing: border-box;
  position: fixed;
  height: 80px;
  width: 100%;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

function Header() {
  return (
    <HeaderWrapper>
      <Link to="/" style={{ color: '#000', textDecoration: 'none' }}>Home</Link>
      <Link to="/add" style={{ color: '#000', textDecoration: 'none' }}>Add a smurf</Link>
    </HeaderWrapper>
  );
}

export default Header;
