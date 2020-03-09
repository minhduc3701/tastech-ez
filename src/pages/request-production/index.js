import React from 'react'
import 'styled-components/macro'
import bg from '../../images/request-production-page/1.jpg'
import {layoutWithLangKey} from "../../components/layout"

const RequestProduction = () => {
  return (
    <div
      css={`
        background-image: url(${bg});
        background-repeat: no-repeat;
        padding-top: 130px;
        padding-bottom: 80px;
      `}>
      <div
        css={`
          margin: auto;
          max-width: 640px;
        `}>
        <iframe
          title="ezbiztrip"
          src="https://docs.google.com/forms/d/e/1FAIpQLScf4mjuNJfSyv2hYrYKdn9K9OqkfcO4cFvM3HSsnUQT8gEsUg/viewform?embedded=true"
          width="100%"
          height="1800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0">
          Loading…
        </iframe>
      </div>
    </div>
  )
}

export default layoutWithLangKey(RequestProduction)
