import React from "react"
import { FaFacebook, FaPinterest, FaInstagram, FaYoutube } from "react-icons/fa"
import styles from "../css/bigSocialIcon.module.css"

export default [
  {
    icon: <FaFacebook className={styles.icon}></FaFacebook>,
    label: "facebook",
    url:
      "https://m.facebook.com/cveticizavasusavrsenusvadbu/?ref=bookmarks&mds=%2Fa%2Fpages%2Fchoose_photo_upload%2F%3FpageID%3D1471747599599619&",
  },
  {
    icon: <FaPinterest className={styles.icon}></FaPinterest>,
    label: "pinterest",
    url: "https://www.pinterest.com/SvadbeniCvet/",
  },
  {
    icon: <FaInstagram className={styles.icon}></FaInstagram>,
    label: "instagram",
    url: "https://www.instagram.com/cvetici__za__svadbu/?igshid=1bs2j1shz10z",
  },
  {
    icon: <FaYoutube className={styles.icon}></FaYoutube>,
    label: "youtube",
    url:
      "https://www.youtube.com/channel/UC86annL_cXXyT4AeKOv2N4A?view_as=subscriber",
  },
]
