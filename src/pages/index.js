import React from "react"
import { Link, graphql } from "gatsby"

export default function Home({ data }) {
  console.log(data)
  return (
    <div>
      <h1>hello</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.frontmatter.slug}>
            <h3>{node.frontmatter.title}</h3>
            <p>{node.excerpt}</p>
            <p>{node.timeToRead}</p>
          </Link>
        </div>
      ))}
    </div>
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
