import React from 'react'
import {layoutWithLangKey} from "../../components/layout"
import SEO from '../../components/seo'
import ContactForm from '../../components/ContactForm'
import { injectIntl } from 'react-intl'

const ContactUs = props => {
    const { formatMessage } = props.intl

  return (
    <React.Fragment>
      <SEO
          title={formatMessage({ id: "contact.meta.title" })}
          description={formatMessage({ id: "contact.meta.description" })}
          lang={props.langKey}
        />

      <ContactForm></ContactForm>
    </React.Fragment>
  )
}

export default layoutWithLangKey(injectIntl(ContactUs))
