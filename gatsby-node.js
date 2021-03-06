const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const heroPageTemplate = path.resolve('src/templates/hero-page.js')
  const buildsPageTemplate = path.resolve('src/templates/builds.js')

  return graphql(`
    {
      allJavascriptFrontmatter {
        edges {
          node {
            frontmatter {
              error
              name
              path
              builds {
                name
                items {
                  name
                  image
                }
              }
              creatorImage
              title
              version
              type
              role
              description
              spotlight
              stats {
                name
                value
                color
              }
              model {
                image
                tmodel
              }
              skills {
                video
                name
                type
                image
                text
                stats {
                  name
                  amount
                  cr
                  wr
                }
              }
              talents {
                name
                type
                color
                text
                image
              }
              skins {
                name
                color
                type
                image
                price
                opals
              }
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)

    res.data.allJavascriptFrontmatter.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: node.frontmatter.path.startsWith('/builds/')
          ? buildsPageTemplate
          : heroPageTemplate,
      })
    })
  })
}
