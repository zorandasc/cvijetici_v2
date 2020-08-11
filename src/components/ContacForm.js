import React from "react"
import styles from "../css/contactForm.module.css"

const ContacForm = () => {
  return (
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
        <label htmlFor="name">Vaše ime</label>
        <input
          required
          type="text"
          name="name"
          id="name"
          className={styles.formControl}
          placeholder="ime"
        ></input>
      </div>
      <div>
        <label htmlFor="email">Vaš email</label>
        <input
          required
          type="email"
          name="email"
          id="email"
          className={styles.formControl}
          placeholder="email"
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
        <input type="submit" value="Pošalji" className="btn-primary"></input>
      </div>
    </form>
  )
}

export default ContacForm
