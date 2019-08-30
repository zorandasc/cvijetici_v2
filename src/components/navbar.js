import React, { useState } from "react"
import styles from "../css/navbar.module.css"
import links from "../constants/links"
import socialLinks from "../constants/socialLinks"
import { Link } from "gatsby"

const navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(() => !isOpen)
    console.log(isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Link to="/">JEBENI LOGO</Link>
        </div>
        <button onClick={toggleNav}>|||</button>
        <ul className={styles.navLinks}>
          {links.map((item, index) => {
            return (
              <Link key={index} to={item.path}>
                {item.label}
              </Link>
            )
          })}
        </ul>
        <div className={styles.socialLinks}>
          {socialLinks.map((item, index) => {
            return (
              <a key={index} href={item.url}>
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default navbar
