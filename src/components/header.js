import { Link } from "gatsby"
import styled from "@emotion/styled"
import React from "react"

const Content = styled.div`
  max-width: 860px;
  padding: 1.0875rem;
  font-size: 1.2rem;
  margin: 0 auto;
  width: 100%;
`

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: inline-block;
  position: relative;
  border: 2px solid black;
  border-radius: 5px;
  border-color: #e7e7e7;
  padding: 4px 8px;
  margin: 4px;
  color: black;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const HomeLink = styled(NavLink)`
  margin-left: 0;
`

const SiteHeader = styled.header`
  background: white;
  display: flex;
  align-content: center;
  justify-content: center;
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  max-width: 860px;
`

const Header = () => (
  <SiteHeader>
    <Content>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </Content>
  </SiteHeader>
)

export default Header
