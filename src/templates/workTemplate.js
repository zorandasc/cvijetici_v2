import "@reach/dialog/styles.css"
import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StayledHero from "../components/stayledHero"
import styles from "../css/template.module.css"
import styled from "styled-components"
import Img from "gatsby-image"
import Title from "../components/title"
import { Dialog } from "@reach/dialog"

const workTemplate = ({ data }) => {
  const [{ showLightbox, currentImage }, setLightbox] = useState({
    showLightbox: false,
    currentImage: null,
  })

  const { prefiks, category, images } = data.work
  const [mainImage, ...workImages] = images
  return (
    <Layout>
      <SEO title={category}></SEO>
      <StayledHero img={mainImage.fluid}></StayledHero>
      <section className={styles.template}>
        <Title title={prefiks} subtitle={category}></Title>
        <div className={styles.center}>
          <div className={styles.images}>
            {workImages.map((item, index) => {
              return (
                <div
                  className={styles.previewButton}
                  onClick={() =>
                    setLightbox({
                      showLightbox: true,
                      currentImage: item,
                    })
                  }
                >
                  <Img
                    key={index}
                    fluid={item.fluid}
                    alt="svadbeni artikal"
                    className={styles.image}
                  ></Img>
                </div>
              )
            })}
          </div>
          {showLightbox && (
            <Dialog>
              <Img fluid={currentImage.fluid} />
              <button
                type="button"
                className="btn-primary"
                onClick={() =>
                  setLightbox({
                    showLightbox: false,
                    currentImage: null,
                  })
                }
              >
                Zatvori
              </button>
            </Dialog>
          )}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    work: contentfulWork(slug: { eq: $slug }) {
      prefiks
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
