import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StayledHero from "../components/stayledHero"
import { graphql } from "gatsby"
import Gallerys from "../components/Gallery/gallerys"
import SectionBcg from "../components/sectionBcg"

const gallery = ({ data }) => {
  return (
    <Layout>
      <SEO title="Svadbena Galerija"></SEO>
      <StayledHero img={data.roses.childImageSharp.fluid}></StayledHero>
      <SectionBcg img={data.paternBcg.childImageSharp.fluid}>
        <Gallerys></Gallerys>
      </SectionBcg>
    </Layout>
  )
}

export const query = graphql`
  query {
    roses: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    paternBcg: file(relativePath: { eq: "patern.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default gallery
