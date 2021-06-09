import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import Header from "../components/header"
import { Global, css } from "@emotion/react"

const Wrapper = styled("div")`
  padding: 10px;
  text-align: center;
  font-family: "Lucida Console", "Courier New", monospace;
  min-height: 100%;
  max-width: 100%;
`

const Content = styled("div")`
  padding-bottom: 30px;
  width: 100%;
`

const Footer = styled.div`
  bottom: 5%;
  text-align: center;
`

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Global
        styles={css`
          img {
            max-width: 100%;
            max-height: 100%;
          }
          div {
            margin: 0 auto;
            max-width: 860px;
          }
        `}
      />
      <Header />
      <Content>{children}</Content>
      <Footer>
        <span>
          Built by © <Link to="/about">Mark Yabut</Link>
        </span>
      </Footer>
    </Wrapper>
  )
}
