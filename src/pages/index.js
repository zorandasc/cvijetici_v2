import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StayledHero from "../components/stayledHero"
import About from "../components/Home/aboutHome"
import workCategory from "../components/Home/workCategory"
import RecentBlog from "../components/Home/recentBlog"
import Banner from "../components/banner"
import { Link } from "gatsby"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <StayledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="faithful yes"
        info="Explore and discover awsome world of weddings"
      >
        <Link to="/gallery" className="btn-white">
          gallery
        </Link>
      </Banner>
    </StayledHero>
    <About></About>
    <FeauterdWork></FeauterdWork>
    <RecentBlog></RecentBlog>
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
