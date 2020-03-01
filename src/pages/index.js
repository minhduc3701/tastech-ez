import React from "react"
import { Link } from "gatsby"

import {layoutWithLangKey} from '../components/layout'
import Image from "../components/image"
import SEO from "../components/seo"
import { FormattedMessage } from 'react-intl';

const IndexPage = props => (
  <div>
    <SEO title="Home" />
    <h1><FormattedMessage id="hello" /></h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to={`${props.langUri}/page-2/`}>Go to page 2</Link>
  </div>
)

export default layoutWithLangKey(IndexPage)
