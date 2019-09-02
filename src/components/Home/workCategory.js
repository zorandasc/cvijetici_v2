import React from "react"
import Title from "../title"
import { Link, useStaticQuery, graphql } from "gatsby"
import styles from "../../css/workCategory.module.css"
import Work from "../work"

const getWorks = graphql`
  query {
    workCategory: allContentfulWork {
      edges {
        node {
          contentful_id
          slug
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
      <Title title="naši" subtitle="artikli"></Title>
      <div className={styles.center}>
        {works.map(({ node }) => {
          return <Work key={node.contentful_id} work={node}></Work>
        })}
      </div>
      <Link className="btn-primary" to="/gallery">
        galerija
      </Link>
    </section>
  )
}

export default workCategory
