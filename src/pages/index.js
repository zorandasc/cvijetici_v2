import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StayledHero from "../components/stayledHero"
import About from "../components/Home/about"
import FeauterdWork from "../components/Home/featuredWork"
import ReacentBlog from "../components/Home/reacentBlog"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StayledHero></StayledHero>
    <About></About>
    <FeauterdWork></FeauterdWork>
    <ReacentBlog></ReacentBlog>
  </Layout>
)

export default IndexPage
