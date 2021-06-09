import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Header from "../components/header"

export default function Blog({ data }) {
  return (
    <>
      <Layout>
        <Header />
        <h1>Blog</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={"../" + node.frontmatter.slug}>
              <h3>{node.frontmatter.title}</h3>
              <p>{node.excerpt}</p>w<p>{node.timeToRead}</p>
            </Link>
          </div>
        ))}
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "blog-post" } } }
    ) {
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
