import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Header from "../components/header"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const Content = styled.div`
  /* margin: 0 auto;
  max-width: 860px; */
`
const ReadingTime = styled.h5`
  display: inline;
  color: #606060;
  padding: 1.45rem 1.0875rem;
`
const ArticleDate = styled.h5`
  display: inline;
  color: #606060;
  padding: 1.45rem 1.0875rem;
`

export default function Blog({ data }) {
  return (
    <>
      <Layout>
        <Header />
        <h1>Blog</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Content key={node.id}>
            <Link
              to={"../" + node.frontmatter.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3>{node.frontmatter.title}</h3>
              <ArticleDate>{node.frontmatter.date}</ArticleDate>
              {/* <ReadingTime>Reading time: {node.timeToRead}</ReadingTime> */}
              <p>{node.excerpt}</p>
            </Link>
          </Content>
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
            date(formatString: "DD MMMM, YYYY")
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`
