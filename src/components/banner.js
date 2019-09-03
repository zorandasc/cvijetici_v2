import React from "react"
import style from "../css/banner.module.css"

const banner = ({ title, info, children }) => {
  return (
    <div className={style.banner}>
      <h1>{title}</h1>
      <i>
        <p>{info}</p>
      </i>
      {children}
    </div>
  )
}

export default banner
