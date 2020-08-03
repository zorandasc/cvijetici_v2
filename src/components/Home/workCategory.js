import React from "react"
import Title from "../title"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../../css/workCategory.module.css"
import Work from "../Gallery/work"

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

const WorkCategory = () => {
  const response = useStaticQuery(getWorks)
  const works = response.workCategory.edges
  return (
    <section className={styles.works}>
      <Title title="Odabrani" subtitle="Artikli"></Title>
      <div className={styles.center}>
        {works.map(({ node }) => {
          return <Work key={node.contentful_id} work={node}></Work>
        })}
      </div>
      <AniLink fade className="btn-primary" to="/gallery">
        više
      </AniLink>
    </section>
  )
}

export default WorkCategory
