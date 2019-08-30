import React from "react"
import Title from "../title"
import { Link } from "gatsby"
import styles from "../../css/homeSection.module.css"

const featuredWork = () => {
  return (
    <section className={styles.works}>
      <Title></Title>
      <div className={styles.center}></div>
      <Link to="/gallery">all gallery</Link>
    </section>
  )
}

export default featuredWork
