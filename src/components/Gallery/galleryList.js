import React, { Component } from "react"
import Title from "../title"
import GalleryCard from "./GalleryCard"
import styles from "../../css/workCategory.module.css"

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
      <section className={styles.works}>
        <Title title="svadbena" subtitle="galerija"></Title>
        <div className={styles.center}>
          {this.state.sortedWorks.map(({ node }) => {
            return (
              <GalleryCard key={node.contentful_id} work={node}></GalleryCard>
            )
          })}
        </div>
      </section>
    )
  }
}
