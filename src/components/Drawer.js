import React from "react"
import { FaTimes } from "react-icons/fa"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import links from "../constants/links"

const Drawer = ({ className, visible, closeDrawer, transitionLength }) => {


  return (
    <div
      className={className}
      style={{
        transform: visible ? `translateX(0)` : `translateX(100%)`
      }}
    >
      <div className="header">
        <button onClick={closeDrawer} className="closeBtn">
          <FaTimes></FaTimes>
        </button>
      </div>

      <ul style={{ listStyle: "none", width: "100%" }}>
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
                activeClassName="active"
                partiallyActive={item.path !== "/" ? true : false}
                onClick={() => {
                  //zatvori drawer kako god okrenes
                  setTimeout(() => {
                    closeDrawer()
                  }, (transitionLength + 0.3) * 1000)
                }}
              >
                <span className="icon">
                  {item.icon}
                </span>
                <em className="text">
                  {item.label}
                </em>
              </AniLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default styled(Drawer)`
  z-index: 500;
  position: fixed;
  top: 0;
  right: 0;
  width: 8rem;
  height: 100%;
  
  background-color: var(--mainWhite);
  //box-shadow: -4px 0 30px rgba(0,0,0,.5); 
  box-shadow:var(--box-shadow);     
  transition: transform 400ms ease-out;
  overflow: hidden;
  .header{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    text-align: center;
    border-bottom: 1px solid var(--primaryColor);
  }
  .closeBtn{
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--mainBlack);
    background: none;
    font-size: 2.3rem;
    border: none;
    cursor: pointer;
    outline: none;        
  }
  .linkContainer{
    height: calc((100vh - 80px) / 5);
    min-height: 90px;
    width: 100%;
    float: left;
    box-shadow:var(--darkShadow);
    border: 1px solid var(--primaryColor);
    border-top: none;
    border-left:none;
    border-right:none;
    background-color: var(--mainWhite);
    
  }
  
  .linkContainer:hover{
    background-color: var(--mainGrey);
  }
 
  .link{
    padding:0 0.5rem;
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    text-decoration: none;
  }
  .icon{
    position: absolute;
    height: 55px;
    width: 55px;
    top: calc(50% - 40px);
    left: 50%;
    transform: translateX(-50%);
    font-size: 4rem;
    color: var(--primaryColor);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .active .icon{
    color: var(--mainBlack);
  }
  .text{
    position: absolute;
    width: 100%;
    left: 0;
    top: calc(50% + 15px);
    font-weight: 200;
    font-size: 1.1rem;
    font-style: normal;
    text-transform: capitalize;
    color:var(--mainBlack);
  }
  
`
