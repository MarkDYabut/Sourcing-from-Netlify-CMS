import { Link } from "gatsby"
import styled from "@emotion/styled"
import React from "react"

const Content = styled.div`
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
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

const SpanNavLink = styled(NavLink)`
  display: block;
  margin: 1rem;
`

const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
`
const Links = () => {
  return (
    <SiteHeader>
      <Content>
        <h4>Internal Links</h4>
        <SpanNavLink to="/blog">Blog</SpanNavLink>
        <SpanNavLink to="/about">About</SpanNavLink>
      </Content>
    </SiteHeader>
  )
}

export default Links
