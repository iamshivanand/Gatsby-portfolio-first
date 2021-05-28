const path = require("path")

//we can destructe some of the thinsg in the arguments
//1.graphql(so that we can use it to make the queries)
//2.actions( this contains few methods those we ca use in here)
//one of the method of actions is genrate the pages
exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  //we need slug in the above case because this slug is going to be
  //the part of the route for that page in our case

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: "/projects/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/project-details.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
}
