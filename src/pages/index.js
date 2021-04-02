import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import SEO from "../components/seo"
import StayledHero from "../components/stayledHero"
import AboutHomy from "../components/Home/AboutHomy"
import FeaturedGalery from "../components/Home/FeaturedGalery"
import Banner from "../components/banner"
//import SectionBcg from "../components/sectionBcg"
import Wave from "../components/Wave"
import Particle from "../components/Particle"
import retro from "../images/retro_rose.svg"

export default ({ data }) => (
  <>
    <SEO title="Home" />
    <StayledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="svadbeni cvet"
        info="Pridruži nam se i istraži čarobni svet svadbenih rukom pravljenih dekoracija i ukrasa"
      >
        <AniLink fade to="/gallery" className="btn-hero">
          galerija
        </AniLink>
      </Banner>
      <Wave></Wave>
      <Particle></Particle>
    </StayledHero>

    <AboutHomy></AboutHomy>
    <div
      style={{
        backgroundImage: `url(${retro})`,
        backgroundAttachment: "fixed",
        backgroundColor: `var(--mainWhite)`,
      }}
    >
      <FeaturedGalery></FeaturedGalery>
    </div>
  </>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "marriage.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
