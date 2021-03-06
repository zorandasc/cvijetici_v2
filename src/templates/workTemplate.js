import "@reach/dialog/styles.css"
import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { Dialog } from "@reach/dialog"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

//import Layout from "../components/layout"
import SEO from "../components/seo"
import StayledHero from "../components/stayledHero"
import styles from "../css/templateWork.module.css"
import Title from "../components/title"
import ScrollButton from "../components/ScrollButton"

const CustomDialog = styled(Dialog)`
  button {
    border: none;
    outline: none;
    margin-top: 1rem;
    background: var(--primaryColor);
    color: var(--mainBlack);
    transition: var(--mainTransition);
  }
  button:hover {
    background: var(--mainBlack);
    color: var(--primaryColor);
  }
`

const WorkTemplate = ({ data }) => {
  const [{ showLightbox, currentImage }, setLightbox] = useState({
    showLightbox: false,
    currentImage: null,
  })

  const {
    prefiks,
    category,
    main,
    opis: { json },
    images,
  } = data.work
  const [mainImage, ...workImages] = images

  return (
    <>
      <SEO title={`${prefiks} ${category}`}></SEO>

      <StayledHero img={mainImage.fluid}></StayledHero>
      <section className={styles.template}>
        <Title title={prefiks} subtitle={category}></Title>

        <header id="header" className={styles.header}>
          <ScrollButton></ScrollButton>
          <h2 className={styles.ribbon}>
            <span className={styles.ribbonContent}>{category}</span>
          </h2>
          <div className={styles.underpage}>
            {documentToReactComponents(json)}
          </div>
        </header>

        <div className={styles.center}>
          <div className={styles.images}>
            {workImages.map((item, index) => {
              return (
                <div
                  key={index}
                  className={styles.previewButton}
                  onClick={() =>
                    setLightbox({
                      showLightbox: true,
                      currentImage: item,
                    })
                  }
                  onKeyDown={() =>
                    setLightbox({
                      showLightbox: true,
                      currentImage: item,
                    })
                  }
                  role="button"
                  tabIndex="0"
                >
                  <Img
                    fluid={item.fluid}
                    alt="svadbeni artikal"
                    className={styles.image}
                  ></Img>
                  <h6 className={styles.broj}>{`${main}${index}`}</h6>
                </div>
              )
            })}
          </div>
          {showLightbox && (
            <CustomDialog>
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
            </CustomDialog>
          )}
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    work: contentfulWork(slug: { eq: $slug }) {
      prefiks
      category
      main
      images {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      opis {
        json
      }
    }
  }
`

export default WorkTemplate
