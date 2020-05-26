import React from "react"

import {layoutWithLangKey} from "../components/layout"
import SEO from "../components/seo"
import { FormattedMessage} from 'react-intl'
const scope='notfound404'
const NotFoundPage = props => (
  <div>
    <SEO title="404: Not found" />
    
    <h1> <FormattedMessage id={`${scope}.notfound`} /></h1>
    <p><FormattedMessage id={`${scope}.sadness`} /></p>
  </div>
)

export default layoutWithLangKey(NotFoundPage)
