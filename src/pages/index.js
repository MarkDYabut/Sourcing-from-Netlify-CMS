import React from "react"
import { graphql } from "gatsby"

export default function Home({ data }) {
  console.log(data)
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`
