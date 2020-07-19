import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { AppContext } from "../context"
import styles from "../css/scrollButton.module.css"
import { FaArrowCircleUp } from "react-icons/fa"

const ScrollButton = () => {
  const { height } = React.useContext(AppContext)
  return (
    <button
      onClick={() => scrollTo("#header")}
      className={
        height > 4000
          ? `${styles.scrollTop} ${styles.active}`
          : ` ${styles.scrollTop} `
      }
    >
      <FaArrowCircleUp className={styles.scrollArrow}></FaArrowCircleUp>
    </button>
  )
}

export default ScrollButton
