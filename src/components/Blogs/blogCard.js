import React from "react"
import styles from "../../css/blogCard.module.css"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const blogCard = ({ work }) => {
  const { slug, title, snipet, heroImage } = work
  let mainImage = heroImage.fluid
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
        <h3>{title}</h3>
        <h4>
          <span>by Lidija</span>
        </h4>
        <p>{snipet}</p>
      </div>
    </article>
  )
}

export default blogCard
