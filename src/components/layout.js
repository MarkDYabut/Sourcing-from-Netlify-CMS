import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Wrapper = styled("div")`
  padding: 10px;
  text-align: center;
  font-family: "Lucida Console", "Courier New", monospace;
  min-height: 100%;
`

const Footer = styled.div`
  width: 600px;
  position: fixed;
  bottom: 5%;
  left: 50%;
  margin-left: -300px;
`

export default function Layout({ children }) {
  return (
    <Wrapper>
      {children}
      <Footer>
        <span>
          Built by © <Link to="/about">Mark Yabut</Link>
        </span>
      </Footer>
    </Wrapper>
  )
}
