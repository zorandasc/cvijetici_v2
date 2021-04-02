import React from "react"
//import Layout from "../components/layout"
import SEO from "../components/seo"
import StayledHero from "../components/stayledHero"
import { graphql } from "gatsby"
import Gallerys from "../components/Gallery/gallerys"
//import SectionBcg from "../components/sectionBcg"
import retro from "../images/retro_rose.svg"

const gallery = ({ data }) => {
  return (
    <>
      <SEO title="Svadbena Galerija"></SEO>
      <StayledHero img={data.roses.childImageSharp.fluid}></StayledHero>
      <div
        style={{
          backgroundImage: `url(${retro})`,
          backgroundAttachment: "fixed",
          backgroundColor: `var(--mainWhite)`,
        }}
      >
        <Gallerys></Gallerys>
      </div>
    </>
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
  }
`

export default gallery
