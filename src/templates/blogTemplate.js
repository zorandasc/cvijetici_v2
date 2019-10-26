import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../css/templateBlog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"
import StyledHero from "../components/stayledHero"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import RichImage from "../components/rixhImage"

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulBlog(slug: { eq: $slug }) {
      title
      images {
        fluid {
          ...GatsbyContentfulFluid
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
    images,
    text: { json },
  } = data.post
  const mainImage = images[0]

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return <RichImage contentfulId={node.data.target.sys.id}></RichImage>
      },
    },
  }

  return (
    <Layout>
      <SEO title={title}></SEO>
      <StyledHero img={mainImage.fluid}></StyledHero>
      <section className={styles.template}>
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
          <AniLink fade to="blog" className="btn-primary">
            svi postovi
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export default BlogTemplate
