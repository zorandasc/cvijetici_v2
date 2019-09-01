import React from "react"
import Title from "../title"
import { Link } from "gatsby"
import styles from "../../css/workCategory.module.css"

const workCategory = () => {
  return (
    <section className={styles.works}>
      <Title title="our" subtitle="work"></Title>
      <div className={styles.center}></div>
      <Link className="btn-primary" to="/gallery">
        all gallery
      </Link>
    </section>
  )
}

export default workCategory
