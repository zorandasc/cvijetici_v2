import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StayledHero from "../components/stayledHero"
import About from "../components/Home/aboutHome"
import WorkCategory from "../components/Home/workCategory"
import Banner from "../components/banner"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
import SectionBcg from "../components/sectionBcg"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <StayledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="svadbeni cvet"
        info="Pridruži nam se i istraži čarobni svet svadbenih rukom pravljenih artikala"
      >
        <AniLink fade to="/gallery" className="btn-white">
          galerija
        </AniLink>
      </Banner>
    </StayledHero>

    <About></About>
    <SectionBcg home="true" img={data.aboutBcg.childImageSharp.fluid}>
      <WorkCategory></WorkCategory>
    </SectionBcg>
  </Layout>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "roses.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    aboutBcg: file(relativePath: { eq: "patern.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
