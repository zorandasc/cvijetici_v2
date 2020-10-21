import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

import Title from "../title"
import GalleryCard from "../Gallery/GalleryCard"

const getWorks = graphql`
  query {
    workCategory: allContentfulWork(filter: { featured: { eq: true } }) {
      edges {
        node {
          contentful_id
          slug
          prefiks
          category
          heroImage {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const FeaturedGalery = () => {
  const response = useStaticQuery(getWorks)
  const works = response.workCategory.edges
  return (
    <SectionWrapper>
      <Title title="Odabrani" subtitle="Artikli"></Title>
      <div className="center">
        {works.map(({ node }) => {
          return (
            <GalleryCard key={node.contentful_id} work={node}></GalleryCard>
          )
        })}
      </div>
      <AniLink fade className="btn-primary" to="/gallery">
        više
      </AniLink>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`

  padding: 1rem 0 4rem 0;
  text-align: center;
  background: transparent;


.center {
  width: 80vw;
  margin: 3rem auto;
  display: grid;
  /*.. then all rows will be equal height.*/
  grid-auto-rows: 1fr;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
}

@media screen and (min-width: 576px) {
 
    padding: 4rem 0;

  .center {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 1200px) {
  .center {
    width: 100%;
    max-width: 1170px;
    grid-template-columns: repeat(3, minmax(368.66px, 1fr));
  }
}

`


export default FeaturedGalery
