import React from "react"
import styles from "../css/footer.module.css"
import links from "../constants/links"
import socialLinks from "../constants/socialLinks"
import policyLinks from "../constants/policyLinks"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <AniLink fade key={index} to={item.path}>
              {item.label}
            </AniLink>
          )
        })}
      </div>
      <div className={styles.links}>
        {policyLinks.map((item, index) => {
          return (
            <AniLink fade key={index} to={item.path} className={styles.policy}>
              {item.label}
            </AniLink>
          )
        })}
      </div>
      <div className={styles.icons}>
        {socialLinks.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="socials links"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; Svadbeni cvet {new Date().getFullYear()} all rights
        reserved
      </div>
    </div>
  )
}

export default footer
