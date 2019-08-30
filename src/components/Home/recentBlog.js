import React from "react"
import Title from "../title"
import { Link } from "gatsby"
import styles from "../../css/homeSection.module.css"

const recentBlog = () => {
  return (
    <section className={styles.blogs}>
      <Title></Title>
      <div className={styles.center}></div>
      <Link to="/blog">all blogs</Link>
    </section>
  )
}

export default recentBlog
