import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaTimes } from "react-icons/fa"

import links from "../constants/links"
//import img from "../images/moroccan.png"
import img from "../images/bloom.png"

const Siddebar = ({ visible, closeDrawer, transitionLength }) => {
  return (
    <DrawerWrapper DrwVisible={visible}>
      <button
        onClick={closeDrawer}
        className="closeBtn"
        aria-label="Close Menu Button"
      >
        <FaTimes></FaTimes>
      </button>
      <nav>
        <ul className="navigation">
          {links.map((item, index) => {
            return (
              <li key={index} className="linkContainer">
                <AniLink
                  className="link"
                  swipe
                  direction="left"
                  top="entry"
                  duration={transitionLength}
                  to={item.path}
                  aria-label={`${item.label}`}
                  activeClassName="active"
                  partiallyActive={item.path !== "/" ? true : false}
                  onClick={() => {
                    //zatvori drawer kako god okrenes
                    setTimeout(() => {
                      closeDrawer()
                    }, (transitionLength + 0.3) * 1000)
                  }}
                >
                  {item.icon}
                </AniLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </DrawerWrapper>
  )
}

const DrawerWrapper = styled.div`
  position: fixed;
  z-index: 500;
  top: 0;
  right: 0;
  width: 8rem;
  height: 100%;
  background: url(${img}) repeat center top;
  box-shadow: var(--box-shadow);
  transform: ${props =>
    props.DrwVisible ? "translateX(0)" : "translateX(100%)"};
  transition: transform 400ms ease-out;
  overflow: hidden;
  .navigation {
    background-color: transparent;
    list-style: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .link,
  .closeBtn {
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f7f7f7;
    background-image: linear-gradient(to bottom, #f7f7f7, #e7e7e7);
    color: var(--mainBlack);
    margin: 20px;
    width: 60px;
    height: 60px;
    position: relative;
    text-align: center;
    line-height: 60px;
    border-radius: 50%;
    box-shadow: 0px 3px 8px #aaa, inset 0px 2px 3px var(--mainWhite);
    transition: var(--mainTransition);
  }
  .closeBtn {
    font-size: 1rem;
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin: 10px;
    outline: none;
    border: none;
  }

  .active,
  .link:hover {
    text-decoration: none;
    color: var(--primaryColor);
    background: #f5f5f5;
    box-shadow: 0px 3px 8px var(--primaryColor),
      inset 0px 2px 3px var(--primaryColor);
  }

  .linkContainer::before {
    content: "";
    display: block;
    border-left: 2px solid #ddd;
    border-right: 2px solid var(--mainWhite);
    height: 100%;
    width: 2px;
    position: absolute;
    left: 50%;
    background: var(--mainWhite);
    z-index: -1;
  }
  .closeBtn::before,
  .link::before {
    content: "";
    display: block;
    background: var(--mainWhite);
    border-top: 2px solid #ddd;
    position: absolute;
    top: -18px;
    left: -18px;
    bottom: -18px;
    right: -18px;
    z-index: -1;
    border-radius: 50%;
    box-shadow: inset 0px 8px 48px #ddd;
  }

  @media screen and (min-width: 370px) {
    .link {
      margin: 26px;
    }
  }

  @media screen and (min-width: 400px) {
    .link {
      width: 80px;
      height: 80px;
      line-height: 80px;
    }
  }
`

export default Siddebar
