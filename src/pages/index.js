import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

export default function Home({ data }) {
  console.log(data)
  return (
    <>
      <Layout>
        <h1>hello</h1>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            slug
            title
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`
