import React from 'react'
import {layoutWithLangKey} from "../../components/layout"
import SEO from '../../components/seo'
import ContactForm from '../../components/ContactForm'

const ContactUs = props => {
  return (
    <React.Fragment>
      <SEO title="Contact" lang={props.langKey}/>

      <ContactForm></ContactForm>
    </React.Fragment>
  )
}

export default layoutWithLangKey(ContactUs)
