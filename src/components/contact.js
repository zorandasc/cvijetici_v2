import React from "react"
import Title from "../components/title"
import styles from "../css/contact.module.css"

const contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="pišite" subtitle="nam"></Title>
      <div className={styles.center}>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className={styles.form}
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
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
            <label htmlFor="kontakt">Vaš kontakt</label>
            <input
              required
              type="text"
              name="kontakt"
              id="kontakt"
              className={styles.formControl}
              placeholder="Vaš: Tel/mob, email, instagram, facebook"
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
