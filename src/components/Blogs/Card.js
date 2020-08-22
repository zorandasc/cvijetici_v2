import React, { useState, useEffect, useRef } from "react"
import GatbyImage from "gatsby-image"
import { navigate } from "gatsby"

import styles from "../../css/card.module.css"
import { FaAngleDoubleRight } from "react-icons/fa"

const Card = ({ item }) => {
  const [width, setWidth] = useState(0)
  const [height, setHieght] = useState(0)

  //za pracenje misa
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  //da se karta vrati u pocetni polozaj nakon mouseleave
  const [mouseLeaveDelay, setMuseLeaveDelay] = useState(0)

  //problem je sto se mouseleave aktivira nakon clicka, pa imamomo
  //memory leak, zato provjeravamo isClicked
  const [isClicked, setIsClicked] = useState(false)

  //transformaicja karte i bg on mousemuve
  const [cardTransform, setCardTransform] = useState(null)
  const [bgTransform, setBgTransform] = useState(null)

  const card = useRef(null)

  const { slug, title, snipet, heroImage } = item

  useEffect(() => {
    setWidth(card.current.offsetWidth)
    setHieght(card.current.offsetHeight)
  }, [])

  useEffect(() => {
    const rX = (mouseX / width) * 30
    const rY = (mouseY / height) * -30
    const cardTrans = {
      transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
      cursor: `pointer`,
    }

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
    if (isClicked) {
      setIsClicked(false)
    }
    setMuseLeaveDelay(clearTimeout(mouseLeaveDelay))
  }
  const handleMouseLeave = () => {
    if (!isClicked) {
      setMuseLeaveDelay(
        setTimeout(() => {
          setMouseX(0)
          setMouseY(0)
        }, 1000)
      )
    }
  }

  const handleCardClick = () => {
    setIsClicked(true)
    navigate(`/blog/${slug}`)
  }

  function isTouchScreendevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints
  }
  console.log(isTouchScreendevice())
  return (
    <div
      className={styles.cardWrap}
      onMouseMove={isTouchScreendevice() ? null : handleMouseMove}
      onMouseEnter={isTouchScreendevice() ? null : handleMouseEnter}
      onMouseLeave={isTouchScreendevice() ? null : handleMouseLeave}
      onMouseUp={isTouchScreendevice() ? null : handleCardClick}
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

          <p className={styles.content} onTouchStart={handleCardClick}>
            {snipet}
            <FaAngleDoubleRight className={styles.arrow}></FaAngleDoubleRight>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
