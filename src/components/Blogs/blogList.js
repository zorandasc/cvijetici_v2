import React, { Component } from "react"
import Title from "../title"
import Card from "./Card"
import styles from "../../css/blogCategory.module.css"

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
      <section className={styles.blogs}>
        <Title title="blog" subtitle="postovi"></Title>
        <div className={styles.center}>
          {this.state.sortedBlogs.map(({ node }) => {
            return <Card key={node.contentful_id} item={node}></Card>
          })}
        </div>
      </section>
    )
  }
}
