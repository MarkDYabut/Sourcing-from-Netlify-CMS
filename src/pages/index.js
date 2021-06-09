import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Links from "../components/links"

export default function Home({ data }) {
  return (
    <>
      <Layout>
        <h1>{data.index.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.index.html }} />
        <h3>{data.links.frontmatter.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: data.links.html }} />
        <Links />
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    index: markdownRemark(frontmatter: { template: { eq: "index-page" } }) {
      html
      frontmatter {
        title
      }
    }
    links: markdownRemark(frontmatter: { template: { eq: "links-page" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
