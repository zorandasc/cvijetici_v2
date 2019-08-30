import React from "react"
import styles from "../css/footer.module.css"
import links from "../constants/links"
import socialLinks from "../constants/socialLinks"
import { Link } from "gatsby"

const footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              {item.label}
            </Link>
          )
        })}
      </div>
      <div className={styles.social}>
        {socialLinks.map((item, index) => {
          return (
            <a key={index} href={item.url}>
              {item.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}></div>
    </div>
  )
}

export default footer
