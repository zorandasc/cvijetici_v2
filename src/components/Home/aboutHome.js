import React from "react"
import Title from "../title"
import styles from "../../css/aboutHome.module.css"

const aboutHome = () => {
  return (
    <section className={styles.about}>
      <Title></Title>
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img alt="about slika"></img>
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>who are we</h4>
          <p>
            "Our goals of overcoming everyday hurdles trough our blogs stories,
            tasty and interesting recipes and lifetime experience."
          </p>
          <button type="button">read more</button>
        </article>
      </div>
    </section>
  )
}

export default aboutHome
