import React from 'react'
import api from '../../modules/api'
import { FormattedMessage, injectIntl } from 'react-intl'
import Recaptcha, { resetRecaptcha } from '../RecaptchaV3'
import { Row, Col } from 'reactstrap'
import { toast } from 'react-toastify'
import LoadingButton from '../Common/LoadingButton'

import {
  Wrapper,
  Title,
  ContactWrapper,
  ContactForm,
  ContactInfo,
  SubmitBtnWrapper,
  InfoDetail,
  SocialLinks,
  Label
} from '../../styles/contactStyle'
import {
  Container,
  FormField,
  FormInput,
  FormTextarea,
  CustomRow
} from '../../styles'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Icon } from '@iconify/react'
import linkedinBox from '@iconify/icons-mdi/linkedin-box'
import facebookBox from '@iconify/icons-mdi/facebook-box'
import twitterBox from '@iconify/icons-mdi/twitter-box'
import bxlInstagramAlt from '@iconify/icons-bx/bxl-instagram-alt'
import outlineLocationOn from '@iconify/icons-ic/outline-location-on'
import twotonePhone from '@iconify/icons-ic/twotone-phone'
import outlineEmail from '@iconify/icons-ic/outline-email'

const scope = 'components.AboutUs'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      submitting: false,
      isCaptchaVerified: false
    }
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    this.setState({
      submitting: true
    })
    try {
      await api.sendContactForm(this.state)
      toast.success(
        'Send message successful! We will contact with you soon!  Thanks a lot!',
        {
          position: toast.POSITION.TOP_CENTER
        }
      )
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      })
    } catch (e) {
      this.setState({
        isCaptchaVerified: false
      })
      toast.error('Something went wrong! Please try again!', {
        position: toast.POSITION.TOP_CENTER
      })
    }

    resetRecaptcha()

    this.setState({
      submitting: false
    })
  }
  handleVerifyCaptcha = captchaResponse => {
    this.setState({
      isCaptchaVerified: true,
      captchaResponse
    })
  }
  render() {
    let { firstName, lastName, email, phone, message } = this.state
    const { formatMessage } = this.props.intl

    return (
      <Wrapper className={this.props.bottom ? 'image-bottom' : ''}>

        <Container>
          <ContactWrapper>
            <Row noGutters>
              <Col lg={8}>
                <ContactForm onSubmit={this.handleSubmit}>
                  <Title>
                    <FormattedMessage
                      tagName="span"
                      id={`${scope}.contactFormHeading`}
                    />
                  </Title>

                  <CustomRow spacing={16}>
                    <Col sm={6}>
                      <FormField>
                        <FormInput
                          required
                          type="text"
                          name="firstName"
                          value={firstName}
                          onChange={this.handleInputChange}
                        />
                        <Label focus={firstName}>
                          <FormattedMessage
                            tagName="span"
                            id={`${scope}.contactFormLabel1`}
                          />
                        </Label>
                      </FormField>
                    </Col>
                    <Col sm={6}>
                      <FormField>
                        <FormInput
                          required
                          type="text"
                          name="lastName"
                          value={lastName}
                          onChange={this.handleInputChange}
                        />
                        <Label focus={lastName}>
                          <FormattedMessage
                            tagName="span"
                            id={`${scope}.contactFormLabel2`}
                          />
                        </Label>
                      </FormField>
                    </Col>
                  </CustomRow>

                  <CustomRow spacing={16}>
                    <Col sm={6}>
                      <FormField>
                        <FormInput
                          required
                          type="email"
                          name="email"
                          value={email}
                          onChange={this.handleInputChange}
                        />
                        <Label focus={email}>
                          <FormattedMessage
                            tagName="span"
                            id={`${scope}.contactFormLabel3`}
                          />
                        </Label>
                      </FormField>
                    </Col>
                    <Col sm={6}>
                      <FormField>
                        <FormInput
                          required
                          type="text"
                          name="phone"
                          value={phone}
                          onChange={this.handleInputChange}
                        />
                        <Label focus={phone}>
                          <FormattedMessage
                            tagName="span"
                            id={`${scope}.contactFormLabel4`}
                          />
                        </Label>
                      </FormField>
                    </Col>
                  </CustomRow>

                  <FormField>
                    <FormTextarea
                      required
                      rows={4}
                      type="text"
                      name="message"
                      value={message}
                      onChange={this.handleInputChange}
                    />
                    <Label focus={message}>
                      <FormattedMessage
                        tagName="span"
                        id={`${scope}.contactFormLabel5`}
                      />
                    </Label>
                  </FormField>

                  <div className="form-footer">
                    <div className="captchar overflow-hidden">
                      <Recaptcha
                        verifyCallback={this.handleVerifyCaptcha}
                        action="contact_form"
                      />
                    </div>

                    <SubmitBtnWrapper>
                      {this.state.isCaptchaVerified ? (
                        <LoadingButton
                          type="submit"
                          className="submitBtn"
                          submitting={this.state.submitting}>
                          <FormattedMessage
                            tagName="span"
                            id={`${scope}.contactFormButton`}
                          />
                        </LoadingButton>
                      ) : (
                        <button
                          className="disableBtn"
                          type="button"
                          onClick={null}>
                          <FormattedMessage
                            tagName="span"
                            id={`${scope}.contactFormButton`}
                          />
                        </button>
                      )}
                    </SubmitBtnWrapper>
                  </div>
                </ContactForm>
              </Col>
              <Col lg={4}>
                <ContactInfo>
                  <Title>
                    <FormattedMessage
                      tagName="span"
                      id={`${scope}.contactInfoHeading`}
                    />
                  </Title>
                  <InfoDetail>
                    <li>
                      <Icon className="icon" icon={outlineLocationOn} />

                      <FormattedMessage
                        tagName="span"
                        id={`${scope}.contactInfoAddress`}
                      />
                    </li>
                    <li>
                      <Icon className="icon" icon={twotonePhone} />

                      <a href="tel:+6562613219">+65 6261 3219</a>
                    </li>

                    <li>
                      <Icon className="icon" icon={outlineEmail} />

                      <a href="mailto:support@ezbiztrip.com">
                        <FormattedMessage
                          tagName="span"
                          id={`${scope}.contactInfoMail`}
                        />
                      </a>
                    </li>
                  </InfoDetail>

                  <SocialLinks>
                    <a
                      href={formatMessage({
                        id: 'link.facebook'
                      })}
                      target="_blank"
                      rel="noopener noreferrer">
                      <Icon icon={facebookBox} />
                    </a>
                    <a
                      href="https://twitter.com/ezbiztrip"
                      target="_blank"
                      rel="noopener noreferrer">
                      <Icon icon={twitterBox} />
                    </a>
                    <a
                      href="https://www.instagram.com/ezbiztrip/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <Icon icon={bxlInstagramAlt} />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/ezbiztrip/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <Icon icon={linkedinBox} />
                    </a>
                  </SocialLinks>
                </ContactInfo>
              </Col>
            </Row>
          </ContactWrapper>
        </Container>
      </Wrapper>
    )
  }
}

export default injectIntl(Contact)
