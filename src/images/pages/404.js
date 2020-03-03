import React from "react"

import {layoutWithLangKey} from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = props => (
  <div>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default layoutWithLangKey(NotFoundPage)
