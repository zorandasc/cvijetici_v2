import React from "react"
import AdSense from "react-adsense"

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
        info="Pridruži nam se i istraži čarobni svet svadbenih rukom pravljenih dekoracija i ukrasa"
      >
        <AniLink fade to="/gallery" className="btn-hero">
          galerija
        </AniLink>
      </Banner>
    </StayledHero>

    <About></About>
    <AdSense.Google
      client="ca-pub-3724050527592480"
      slot="5026428023"
      style={{ display: "block" }}
      format="auto"
      responsive="true"
      layoutKey="-gw-1+2a-9x+5c"
    />
    <SectionBcg home="true" img={data.aboutBcg.childImageSharp.fluid}>
      <WorkCategory></WorkCategory>
    </SectionBcg>
    <AdSense.Google
      client="ca-pub-3724050527592480"
      slot="5026428023"
      style={{ display: "block" }}
      format="auto"
      responsive="true"
      layoutKey="-gw-1+2a-9x+5c"
    />
  </Layout>
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
    aboutBcg: file(relativePath: { eq: "patern.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
