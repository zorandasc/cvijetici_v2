import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StayledHero from "../components/stayledHero"
import About from "../components/Home/aboutHome"
import WorkCategory from "../components/Home/workCategory"

import Banner from "../components/banner"
import { Link } from "gatsby"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <StayledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="svadbeni cvet"
        info="Istraži i pronađi naš čarobni svadbeni svet"
      >
        <Link to="/gallery" className="btn-white">
          galerija
        </Link>
      </Banner>
    </StayledHero>
    <About></About>
    <WorkCategory></WorkCategory>
  </Layout>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "beautiful.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
