exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.edges.forEach(edge => {
    const path = edge.node.frontmatter.path
    actions.createPage({
      path: path,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: { path: path },
    })
  })
}
