import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StayledHero from "../components/stayledHero"
import About from "../components/Home/aboutHome"
import FeauterdWork from "../components/Home/featuredWork"
import RecentBlog from "../components/Home/recentBlog"
import Banner from "../components/banner"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StayledHero>
      <Banner
        title="faithful yes"
        info="Explore and discover awsome world of weddings"
      >
        <Link to="/gallery">gallery</Link>
      </Banner>
    </StayledHero>
    <About></About>
    <FeauterdWork></FeauterdWork>
    <RecentBlog></RecentBlog>
  </Layout>
)

export default IndexPage
