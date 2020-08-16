import React, { useState, useEffect, useRef } from "react"
import GatbyImage from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { AppContext } from "../../context"
import styles from "../../css/card.module.css"
import { FaAngleDoubleRight } from "react-icons/fa"

const Card = ({ item }) => {
  const { slug, title, snipet, heroImage } = item
  const context = React.useContext(AppContext)
  const [width, setWidth] = useState(0)
  const [height, setHieght] = useState(0)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [mouseLeaveDelay, setMuseLeaveDelay] = useState(null)

  const [cardTransform, setCardTransform] = useState(null)
  const [bgTransform, setBgTransform] = useState(null)

  const card = useRef(null)

  useEffect(() => {
    setWidth(card.current.offsetWidth)
    setHieght(card.current.offsetHeight)
  }, [])

  useEffect(() => {
    const rX = (mouseX / width) * 30
    const rY = (mouseY / height) * -30
    const cardTrans = { transform: `rotateY(${rX}deg) rotateX(${rY}deg)` }

    const tX = (mouseX / width) * -40
    const tY = (mouseY / height) * -40
    const bgTrans = {
      transform: `translateX(${tX}px) translateY(${tY}px)`,
    }

    setCardTransform(cardTrans)
    setBgTransform(bgTrans)
  }, [mouseX, width, mouseY, height])

  const handleMouseMove = e => {
    setMouseX(e.pageX - card.current.offsetLeft - width / 2)
    setMouseY(e.pageY - card.current.offsetTop - height / 2)
  }
  const handleMouseEnter = () => {
    setMuseLeaveDelay(clearTimeout(mouseLeaveDelay))
  }
  const handleMouseLeave = () => {
    setMuseLeaveDelay(
      setTimeout(() => {
        setMouseX(0)
        setMouseY(0)
      }, 1000)
    )
  }
  console.log(context.width)
  return (
    <>
      {context.width > 1000 ? (
        /*FOR DESKTOP HOVER WITH MOUSE THAN CLICK ON WHOLE CARD*/
        <AniLink to={`/blog/${slug}`} className={styles.link}>
          <div
            className={styles.cardWrap}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={card}
            role="button"
            tabIndex="0"
          >
            <div className={styles.card} style={cardTransform}>
              <GatbyImage
                className={styles.cardBg}
                style={bgTransform}
                fluid={heroImage.fluid}
              ></GatbyImage>

              <div className={styles.cardInfo}>
                <h1 className={styles.title}>{title}</h1>

                <p className={styles.content}>{snipet}</p>
              </div>
            </div>
          </div>
        </AniLink>
      ) : (
        /*FOR MOBILE HOVER ON FIRST TOUCH THAN CLICK ON TEXT FOR NEXT*/

        <div className={styles.cardWrap}>
          <div className={styles.card} style={cardTransform}>
            <GatbyImage
              className={styles.cardBg}
              style={bgTransform}
              fluid={heroImage.fluid}
            ></GatbyImage>

            <div className={styles.cardInfo}>
              <h1 className={styles.title}>{title}</h1>
              <AniLink to={`/blog/${slug}`} className={styles.link}>
                <p className={styles.content}>
                  {snipet}
                  <FaAngleDoubleRight
                    className={styles.arrow}
                  ></FaAngleDoubleRight>
                </p>
              </AniLink>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
