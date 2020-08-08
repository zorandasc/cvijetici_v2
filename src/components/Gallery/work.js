import React from "react"
import styles from "../../css/work.module.css"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const work = ({ work }) => {
  const { slug, prefiks, category, heroImage } = work
  let mainImage = heroImage.fluid

  return (
    <AniLink fade className={styles.work} to={`/gallery/${slug}`}>
      <div className={styles.imgContainer}>
        <Image
          fluid={mainImage}
          className={styles.img}
          alt="wedding category"
        ></Image>
        <span className={styles.link}>istraži</span>
      </div>
      <h3 className={styles.ribbon4}>
        {prefiks} {category}
      </h3>
    </AniLink>
  )
}

export default work
