import React from "react"
import styles from "../../css/work.module.css"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const work = ({ work }) => {
  const { slug, prefiks, category, heroImage } = work
  let mainImage = heroImage.fluid

  return (
    <article className={styles.work}>
      <div className={styles.imgContainer}>
        <Image
          fluid={mainImage}
          className={styles.img}
          alt="wedding category"
        ></Image>
        <AniLink fade className={styles.link} to={`/gallery/${slug}`}>
          istraži
        </AniLink>
      </div>
      <h3 className={styles.ribbon4}>
        {prefiks} {category}
      </h3>
    </article>
  )
}

export default work
