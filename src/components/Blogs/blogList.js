import React, { Component } from "react"
import styled from "styled-components"

import Title from "../title"
import Card from "./Card"


export default class blogList extends Component {
  state = {
    blogs: [],
    sortedBlogs: [],
  }

  componentDidMount() {
    this.setState({
      blogs: this.props.blogCategories.edges,
      sortedBlogs: this.props.blogCategories.edges,
    })
  }

  render() {
    return (
      <CategoryWrapper>
        <Title title="blog" subtitle="postovi"></Title>
        <div className="center">
          {this.state.sortedBlogs.map(({ node }) => {
            return <Card key={node.contentful_id} item={node}></Card>
          })}
        </div>
      </CategoryWrapper>
    )
  }
}

const CategoryWrapper = styled.section`

  padding: 1rem 0 4rem 0;
  text-align: center;
  background-color: var(--mainWhite);


.center {
  padding: 0 80px 40px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
@media screen and (min-width: 576px) {
    padding: 4rem 0;
  
}
`