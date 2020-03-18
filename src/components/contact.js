import React from "react"
import Title from "../components/title"
import styles from "../css/contact.module.css"
import socialLinks from "../constants/socialLinks"
import { FaAt } from "react-icons/fa"

const contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="kontaktirajte" subtitle="nas"></Title>
      <div className={styles.center}>
        <p className={styles.kontaktNacin}>
          Preko naših naloga na društvenim mrežama:
        </p>
        <div className={styles.labeleIkona}>
          <p>Facebook</p>
          <p>Pinterest</p>
          <p>Instagram</p>
          <p>YouTube</p>
        </div>
        <div className={styles.icons}>
          {socialLinks.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="social link"
              >
                {item.icon}
              </a>
            )
          })}
        </div>

        <p className={styles.kontaktNacin}>Preko našeg email kontakta:</p>

        <div className={styles.nasEmail}>
          <div className={styles.emailIcona}>
            <FaAt></FaAt>
          </div>

          <p className={styles.emailAdresa}>dekoracijasvadbenicvet@gmail.com</p>
        </div>

        <p className={styles.kontaktNacin}>Preko naše kontaktne forme:</p>
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
