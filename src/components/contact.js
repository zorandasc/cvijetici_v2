import React from "react"
import Title from "../components/title"
import styles from "../css/contact.module.css"

const contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="pišite" subtitle="nam"></Title>
      <div className={styles.center}>
        <form
          action="https://formspree.io/dekoracijasvadbenicvet@gmail.com"
          method="POST"
          className={styles.form}
        >
          <div>
            <label htmlFor="name">Ime</label>
            <input
              required
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Vaše ime"
            ></input>
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              required
              type="text"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email@email.com"
            ></input>
          </div>
          <div>
            <label htmlFor="message">Poruka</label>
            <textarea
              required
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="Pozdrav"
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              value="pošalji"
              className={styles.submit}
            ></input>
          </div>
        </form>
      </div>
    </section>
  )
}

export default contact
