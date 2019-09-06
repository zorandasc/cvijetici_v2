import React from "react"
import styles from "../css/work.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const work = ({ work }) => {
  const { slug, prefiks, category, images } = work
  let mainImage = images[0].fluid

  return (
    <article className={styles.work}>
      <div className={styles.imgContainer}>
        <Image
          fluid={mainImage}
          className={styles.img}
          alt="wedding category"
        ></Image>
        <Link className={styles.link} to={`/gallery/${slug}`}>
          istraži
        </Link>
      </div>
      <div className={styles.footer}>
        <h4>
          {prefiks} {category}
        </h4>
      </div>
    </article>
  )
}

export default work
