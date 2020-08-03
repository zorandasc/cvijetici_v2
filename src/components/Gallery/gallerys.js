import React from "react"
import GalleryList from "./galleryList"
import { useStaticQuery, graphql } from "gatsby"

const getWorks = graphql`
  query {
    workCategories: allContentfulWork(sort: { order: ASC, fields: category }) {
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

const Gallerys = () => {
  const { workCategories } = useStaticQuery(getWorks)
  return <GalleryList workCategories={workCategories}></GalleryList>
}

export default Gallerys
