import React from "react"
import styles from "../../css/work.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const work = () => {
  return (
    <article className={styles.work}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} alt="wedding category"></Image>
        <Link className={styles.link}>explore</Link>
      </div>
      <div className={styles.footer}>
        <h3>category</h3>
      </div>
    </article>
  )
}

export default work
