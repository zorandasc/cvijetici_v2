import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NE POSTOJI</h1>
    <p>
      Žao nam je upavo ste pokušali rutu koja ne postoji, pokušajte ponovo ili
      se vratirte unatrag.{" "}
    </p>
  </Layout>
)

export default NotFoundPage
