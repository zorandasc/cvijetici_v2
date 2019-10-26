import React, { Component } from "react"
import Title from "../title"
import BlogCard from "./blogCard"
import styles from "../../css/workCategory.module.css"

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
      <section className={styles.works}>
        <Title title="blog" subtitle="postovi"></Title>
        <div className={styles.center}>
          {this.state.sortedBlogs.map(({ node }) => {
            return <BlogCard key={node.contentful_id} work={node}></BlogCard>
          })}
        </div>
      </section>
    )
  }
}
