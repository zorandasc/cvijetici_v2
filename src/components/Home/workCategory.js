import React from "react"
import Title from "../title"
import { Link, useStaticQuery, graphql } from "gatsby"
import styles from "../../css/workCategory.module.css"
import Work from "../work"

const getWorks = graphql`
  query {
    workCategory: allContentfulWork(filter: { featured: { eq: true } }) {
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

const workCategory = () => {
  const response = useStaticQuery(getWorks)
  const works = response.workCategory.edges
  return (
    <section className={styles.works}>
      <Title title="odabrani" subtitle="artikli"></Title>
      <div className={styles.center}>
        {works.map(({ node }) => {
          return <Work key={node.contentful_id} work={node}></Work>
        })}
      </div>
      <Link className="btn-primary" to="/gallery">
        više
      </Link>
    </section>
  )
}

export default workCategory
