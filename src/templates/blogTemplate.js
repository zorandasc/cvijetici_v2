import React from "react"
import { graphql } from "gatsby"
//import Layout from "../components/layout"
import styles from "../css/templateBlog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"
import StyledHero from "../components/stayledHero"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import RichImage from "../components/rixhImage"
import { getFluidGatsbyImage } from "../tools/getFluidGatsbyImage"
import ScrollButton from "../components/ScrollButton"

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulBlog(slug: { eq: $slug }) {
      title
      heroImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      text {
        json
      }
    }
  }
`

const BlogTemplate = ({ data }) => {
  const {
    title,
    heroImage,
    text: { json },
  } = data.post

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        if (node.data.target) {
          const { file, title } = node.data.target.fields

          const image = {
            file: file["en-US"],
          }

          const fluidProps = getFluidGatsbyImage(image, {})
          return <RichImage fluid={fluidProps} title={title["en-US"]} />
        }
      },
    },
  }

  return (
    <>
      <SEO title={title}></SEO>
      <StyledHero img={heroImage.fluid}></StyledHero>
      <section id="header" className={styles.template}>
        <ScrollButton></ScrollButton>
        <div className={styles.center}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.underline}></div>
          <div className={styles.info}>
            <i>
              <p className={styles.publish}>Created by: Lidija</p>
            </i>
          </div>
          <article className={styles.desc}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            svi postovi
          </AniLink>
        </div>
      </section>
    </>
  )
}

export default BlogTemplate
