import React from "react"
import styles from "../../css/blogCard.module.css"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const blogCard = ({ work }) => {
  const { slug, title, snipet, images } = work
  let mainImage = images[0].fluid
  return (
    <article className={styles.work}>
      <div className={styles.imgContainer}>
        <AniLink fade to={`/blog/${slug}`}>
          <Image
            fluid={mainImage}
            className={styles.img}
            alt="wedding category"
          ></Image>
          <div className={styles.link}>istraži</div>
        </AniLink>
      </div>

      <div className={styles.footer}>
        <h2>{title}</h2>
        <h4>
          <span>by Lidija</span>
        </h4>
        <p>{snipet}</p>
      </div>
    </article>
  )
}

export default blogCard
