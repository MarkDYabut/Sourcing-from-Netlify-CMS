import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

export default function Blog({ data }) {
  console.log(data)
  return (
    <>
      <Layout>
        <h1>Blog</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={"../" + node.frontmatter.slug}>
              <h3>{node.frontmatter.title}</h3>
              <p>{node.excerpt}</p>
              <p>{node.timeToRead}</p>
            </Link>
          </div>
        ))}
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
