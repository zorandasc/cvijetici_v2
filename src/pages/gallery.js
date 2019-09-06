import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StayledHero from "../components/stayledHero"
import { graphql } from "gatsby"
import Gallerys from "../components/Gallery/gallerys"

const gallery = ({ data }) => {
  return (
    <Layout>
      <SEO title="Gallery"></SEO>
      <StayledHero img={data.roses.childImageSharp.fluid}></StayledHero>
      <Gallerys></Gallerys>
    </Layout>
  )
}

export const query = graphql`
  query {
    roses: file(relativePath: { eq: "roses.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default gallery
