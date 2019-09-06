import React from "react"
import GalleryList from "../Gallery/galleryList"
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
    paternBcg: file(relativePath: { eq: "patern.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const gallerys = () => {
  const { workCategories, paternBcg } = useStaticQuery(getWorks)
  return (
    <GalleryList
      workCategories={workCategories}
      paternBcg={paternBcg}
    ></GalleryList>
  )
}

export default gallerys
