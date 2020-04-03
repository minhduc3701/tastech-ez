import React from 'react'
import {layoutWithLangKey} from "../../components/layout"
import SEO from '../../components/seo'
import ContactForm from '../../components/ContactForm'
import { injectIntl } from 'react-intl'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-bottom: 120px;

  @media screen and (max-width: 767px) {
    padding-bottom: 0;
  }
`

const ContactUs = props => {
    const { formatMessage } = props.intl

  return (
    <Wrapper>
      <SEO
        title={formatMessage({ id: "contact.meta.title" })}
        description={formatMessage({ id: "contact.meta.description" })}
        lang={props.langKey}
        uri={props.uri}
      />

      <ContactForm />
    </Wrapper>
  )
}

export default layoutWithLangKey(injectIntl(ContactUs))
