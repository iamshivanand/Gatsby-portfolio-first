import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  console.log("data", data)

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop and Deploy</h3>
          <p>JavaScript developer at Bonami Software</p>
          <Link className={styles.btn} to="/projects">
            My Porfolio Projects
          </Link>
        </div>
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          alt="banner"
        />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED
        
        )
      }
    }
  }
`

// export const query = graphql`
//   query SiteInfi {
//     site {
//       siteMetadata {
//         description
//         title
//       }
//     }
//   }
// `
