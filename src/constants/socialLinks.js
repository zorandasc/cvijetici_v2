import React from "react"
import {
  FaFacebookSquare,
  FaPinterestSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa"
import styles from "../css/social.module.css"

export default [
  {
    icon: (
      <FaFacebookSquare
        className={`${styles.icon} ${styles.facebookIcon}`}
      ></FaFacebookSquare>
    ),
    url:
      "https://m.facebook.com/cveticizavasusavrsenusvadbu/?ref=bookmarks&mds=%2Fa%2Fpages%2Fchoose_photo_upload%2F%3FpageID%3D1471747599599619&",
  },
  {
    icon: (
      <FaPinterestSquare
        className={`${styles.icon} ${styles.pinterestIcon}`}
      ></FaPinterestSquare>
    ),
    url: "https://www.pinterest.com/SvadbeniCvet/",
  },
  {
    icon: (
      <FaInstagramSquare
        className={`${styles.icon} ${styles.instagramIcon}`}
      ></FaInstagramSquare>
    ),
    url: "https://www.instagram.com/cvetici__za__svadbu/?igshid=1bs2j1shz10z",
  },
  {
    icon: (
      <FaYoutubeSquare
        className={`${styles.icon} ${styles.youtubeIcon}`}
      ></FaYoutubeSquare>
    ),
    url:
      "https://www.youtube.com/channel/UC86annL_cXXyT4AeKOv2N4A?view_as=subscriber",
  },
]
