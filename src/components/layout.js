import React from "react"
import { Global, css } from "@emotion/react"
import styled from "@emotion/styled"
import Header from "../components/header"

const Wrapper = styled("div")`
  border: 2px solid green;
  padding: 10px;
  text-align: center;
`

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  )
}
