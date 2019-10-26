import React from "react"
import GalleryList from "./galleryList"
import { useStaticQuery, graphql } from "gatsby"

const getWorks = graphql`
  query {
    workCategories: allContentfulWork {
      edges {
        node {
          contentful_id
          slug
          prefiks
          category
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const gallerys = () => {
  const { workCategories } = useStaticQuery(getWorks)
  return <GalleryList workCategories={workCategories}></GalleryList>
}

export default gallerys
