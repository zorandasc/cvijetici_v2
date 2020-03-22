import React from "react"
import {
  FaFacebook,
  FaPinterestSquare,
  FaInstagram,
  FaYoutubeSquare,
} from "react-icons/fa"
import styles from "../css/social.module.css"

export default [
  {
    icon: (
      <FaFacebook
        className={`${styles.icon} ${styles.facebookIcon}`}
      ></FaFacebook>
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
      <FaInstagram
        className={`${styles.icon} ${styles.instagramIcon}`}
      ></FaInstagram>
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
