import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

function Project({ data }) {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  console.log("Data", data)
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h1>Portfolio</h1>
        <p>Projects and websites I've created</p>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage
                  image={
                    project.frontmatter.thumb.childImageSharp.gatsbyImageData
                  }
                  alt="banner"
                  style={{ borderRadius: 0 }}
                />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like What you see? Email me at {contact}</p>
      </div>
    </Layout>
  )
}

export default Project

//export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
