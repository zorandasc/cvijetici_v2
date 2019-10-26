import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BlogList from "./blogList"

const getBlogs = graphql`
  query {
    blogCategories: allContentfulBlog {
      edges {
        node {
          contentful_id
          slug
          title
          snipet
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

const blogs = () => {
  const { blogCategories } = useStaticQuery(getBlogs)
  return <BlogList blogCategories={blogCategories}></BlogList>
}

export default blogs
