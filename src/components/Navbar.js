import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  background-color: #fff;
  /* Optional: Add a subtle border or shadow at the bottom */
  /* border-bottom: 1px solid #eaeaea; */
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;

  /* If you have an actual logo icon, you can place it here:
  img {
    width: 32px;
    margin-right: 8px;
  }
  */
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-left: auto; /* pushes the nav items to the right of the logo */
  gap: 2rem;
`;

const NavItem = styled.li`
  font-size: 1rem;
  color: #000;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #666; /* Slightly darker on hover */
  }
`;

const QuoteButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #000;
  background: #fff;
  color: #000;
  font-weight: 500;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Positivus</Logo>
      <NavMenu>
        <NavItem>About us</NavItem>
        <NavItem>Services</NavItem>
        <NavItem>Use Cases</NavItem>
        <NavItem>Pricing</NavItem>
        <NavItem>Blog</NavItem>
        <QuoteButton>Request a quote</QuoteButton>
      </NavMenu>
    </NavbarContainer>
  );
};

export default Navbar;
