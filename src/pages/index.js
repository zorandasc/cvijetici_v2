import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StayledHero from "../components/stayledHero"
import About from "../components/Home/aboutHome"
import FeauterdWork from "../components/Home/featuredWork"
import RecentBlog from "../components/Home/recentBlog"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StayledHero></StayledHero>
    <About></About>
    <FeauterdWork></FeauterdWork>
    <RecentBlog></RecentBlog>
  </Layout>
)

export default IndexPage
