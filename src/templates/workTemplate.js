import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StayledHero from "../components/stayledHero"
import styles from "../css/template.module.css"
import Img from "gatsby-image"

const workTemplate = ({ data }) => {
  const { category, images } = data.work
  const [mainImage, ...workImages] = images
  return (
    <Layout>
      <SEO title={category}></SEO>
      <StayledHero img={mainImage.fluid}></StayledHero>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {workImages.map((item, index) => {
              return (
                <Img
                  key={index}
                  fluid={item.fluid}
                  alt="svadbeni artikal"
                  className={styles.image}
                ></Img>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    work: contentfulWork(slug: { eq: $slug }) {
      category
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default workTemplate
