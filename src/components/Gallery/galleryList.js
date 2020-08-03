import React, { Component } from "react"
import Title from "../title"
import Work from "./work"
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
            return <Work key={node.contentful_id} work={node}></Work>
          })}
        </div>
      </section>
    )
  }
}
