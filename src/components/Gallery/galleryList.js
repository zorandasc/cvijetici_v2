import React, { Component } from "react"
import styled from "styled-components"

import Title from "../title"
import GalleryCard from "./GalleryCard"


export default class galleryList extends Component {
  state = {
    works: [],
    sortedWorks: [],
  }

  componentDidMount() {
    this.setState({
      works: this.props.workCategories.edges,
      sortedWorks: this.props.workCategories.edges,
    })
  }

  render() {
    return (
      <CategoryWrapper>
        <Title title="svadbena" subtitle="galerija"></Title>
        <div className="center">
          {this.state.sortedWorks.map(({ node }) => {
            return (
              <GalleryCard key={node.contentful_id} work={node}></GalleryCard>
            )
          })}
        </div>
      </CategoryWrapper>
    )
  }
}

const CategoryWrapper = styled.section`

  padding: 1rem 0 4rem 0;
  text-align: center;
  background: transparent;


.center {
  width: 80vw;
  margin: 3rem auto;
  display: grid;
  /*.. then all rows will be equal height.*/
  grid-auto-rows: 1fr;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
}

@media screen and (min-width: 776px) { 
  padding: 4rem 0;
  .center {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 1200px) {
  .center {
    width: 100%;
    max-width: 1170px;
    grid-template-columns: repeat(3, minmax(368.66px, 1fr));
  }
}


`