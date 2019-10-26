import React from "react"
import Title from "../title"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../../css/blogCategory.module.css"
import { useStaticQuery, graphql } from "gatsby"
import BlogWork from "../blogWork"

const getBlogs = graphql`
  query {
    blogCategory: allContentfulBlog(filter: { featured: { eq: true } }) {
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
const blogCategory = () => {
  const response = useStaticQuery(getBlogs)
  const blogs = response.blogCategory.edges
  return (
    <section className={styles.blogs}>
      <Title title="odabrani" subtitle="postovi"></Title>
      <div className={styles.center}>
        {blogs.map(({ node }) => {
          return <BlogWork key={node.contentful_id} post={node}></BlogWork>
        })}
      </div>
      <AniLink fade className="btn-primary" to="/blog">
        više
      </AniLink>
    </section>
  )
}

export default blogCategory
