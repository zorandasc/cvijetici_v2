/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { AppProvider } from "./src/context"

import "./src/components/layout.css"

export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>
}
