import React from "react"
import { Global, css } from "@emotion/react"
import styled from "@emotion/styled"

const Wrapper = styled("div")`
  padding: 10px;
  text-align: center;
  font-family: "Lucida Console", "Courier New", monospace;
`

export default function Layout({ children }) {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  )
}
