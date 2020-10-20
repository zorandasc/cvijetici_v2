import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaAlignRight } from "react-icons/fa"

import logo from "../images/logo.svg"


const NavBarMob = ({ className, openDrawer }) => {

  return (
    <div className={className}>
      <div className="ribbon">
        <div className="prvi">
          <AniLink fade to="/" className="logo">
            <img src={logo} alt="svadbeni cvet"></img>
          </AniLink>

          <button onClick={openDrawer} className="openBtn">
            <FaAlignRight ></FaAlignRight >
          </button>

        </div>
      </div>
    </div>
  )
}

export default styled(NavBarMob)`
  //fiksna podloga od pocetka do kraja
  position: fixed;
  top: 1.2rem;
  left: 0;
  width: 100%;
  z-index: 400;

  //ribon duzine 92% podijeljen u tri dijela
  .ribbon {
    width: 85%;
    margin: 0 auto;
    background: transparent;
    position: relative;
  }
  //zuti krakici ispod ribona (upsravni dijelovi)
  .ribbon::before,
  .ribbon::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -1em;
    border-style: solid;
    border-color: var(--primaryColor) transparent transparent transparent;
    z-index: 100;
  }
  .ribbon::before {
    left: 0;
    border-width: 1em 0 0 1em;
  }
  .ribbon::after {
    right: 0;
    border-width: 1em 1em 0 0;
  }
  //prvi dio ribona za logo
  .prvi {
    width:100%;
    background: var(--mainWhite);
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0.3rem 1rem;
    border-bottom: 0.2rem solid var(--primaryColor);
    box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.5);
  }
  //lievi bijeli zmijski krak
  .prvi::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    bottom: -1.2em;
    left: -2em;
    border: 1.5em solid var(--mainWhite);
    border-right-width: 1.5em;
    border-left-color: transparent;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  }


  //desni bijeli zmijski krak
  .prvi::after {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    bottom: -1.2em;
    right: -2em;
    border: 1.5em solid var(--mainWhite);
    border-left-width: 1.5em;
    border-right-color: transparent;
    box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.5);
  }

  .logo {
    position: absolute;
    z-index: 200;
    left: 10%;
    top: -20%;
    padding: 0.6rem;
    padding-left: 0.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--mainWhite);
    border-bottom: 0.1rem solid var(--primaryColor);
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    box-shadow: -2px 8px 6px -6px rgba(0, 0, 0, 0.5);
  }

  .openBtn{
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--mainBlack);
    background: none;
    font-size: 2rem;
    border: none;
    cursor: pointer;
    outline: none;
  }

  @media screen and (min-width: 400px) {
    top: 1.5rem;
    .logo {
      transform:scale(1.2);
       top: -15%;
    }
  }
`
