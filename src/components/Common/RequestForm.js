import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Col } from 'reactstrap'
import Select from 'react-select'
import SelectI18n from '../SelectI18n'
import api from '../../modules/api'
import icon from '../../images/request-form-arrow.svg'
import { FormattedMessage, injectIntl } from 'react-intl'
import Recaptcha, { resetRecaptcha } from '../../components/RecaptchaV3'
import { FormInput, FormField, CustomRow, selectStyle } from '../../styles'
import HiddenInput from '../HiddenInput'
import RequiredMarker from '../RequiredMarker'
import _ from 'lodash'
import Alert from '../Alert'
import { Link } from 'gatsby'
import { Icon } from '@iconify/react'
import baselineCheckCircle from '@iconify/icons-ic/baseline-check-circle'
import outlineRadioButtonUnchecked from '@iconify/icons-ic/outline-radio-button-unchecked'
import toast from '../../modules/toast'

const scope = 'components.Common.RequestForm'

const roleOption = [
  { value: 'Employer', labelId: `${scope}.optionEmployer` },
  { value: 'Employee', labelId: `${scope}.optionEmployee` }
]
const NoEOption = [
  { value: '1-50', label: '1-50' },
  { value: '50-100', label: '50-100' },
  { value: '100-200', label: '100-200' },
  { value: '200-1000', label: '200-1000' },
  { value: 'More than 1000', label: '> 1000' }
]

const FromWrapper = styled.div`
  display: inline-block;
  padding: 40px 50px;
  width: 100%;
  max-width: 600px;
  border-radius: 16px;
  box-shadow: 0 3px 35px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  text-align: left;

  ${FormField} {
    margin-bottom: 12px;
  }}

  @media (max-width: 767px) {
    padding: 40px 24px;
  }

  @media (max-width: 575px) {
    .row-name {
      margin-right: -5px;
      margin-left: -5px;

      > [class^='col-'] {
        padding-right: 5px;
        padding-left: 5px;
      }
    }
  }
`

const Title = styled.p`
  font-size: 25px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: #323232;
  margin-bottom: 12px;

  @media screen and (max-width: 767px) {
    font-size: 23px;
    margin-bottom: 7px;
  }
`
const SubTitle = styled.p`
  font-size: 14px;
  text-align: center;
  color: #707070;
  line-height: 1.57;
  margin-bottom: 35px;

  @media screen and (max-width: 767px) {
    margin-bottom: 30px;
  }
`
const SubmitBtn = styled.button`
  width: 100%;
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.35;
  border-radius: 28px;
  background-color: #f4b400;
  border: none;
  color: #ffffff;
  padding: 17px;

  &:disabled {
    background-color: #eaeaea !important;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #e3a800;
  }
`
const TextCenter = styled.div`
  text-align: center;
`

const TermsLabel = styled.span`
  display: inline-block;
  position: relative;
  font-size: 15px;
  font-weight: 600;
  color: #222222;

  svg {
    font-size: 24px;
    color: #c1c1c1;
    margin-right: 10px;
    position: relative;
    top: -1px;
    cursor: pointer;

    &.checked {
      color: #f4b400;
    }
  }

  .icon {
    position: relative;

    input {
      opacity: 0;
      position: absolute;
      bottom: 0;
      left: 6px;
      pointer-events: none;
    }
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`

const TermsLink = styled(Link)`
  display: inline-block;
  color: #222222;
  font-size: 15px;
  font-weight: 600;
  text-decoration: underline;

  &:hover {
    color: #f4b400;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`

const FormInputCustom = styled(FormInput)`
  transition: all 0.3s ease-in-out;
  background-image: url(${props => (props.status === 2 ? icon : '')});
  background-position: right 19.8px center;
  background-repeat: no-repeat;
  padding-right: 40px;

  &:focus + label {
    font-size: 10px;
    top: 6px;

    .RequiredMarker {
      font-size: 5px;
      margin-left: 2px;
    }
  }
`

const Label = styled.label`
  color:  #222222;
  font-size: ${props => (props.focus ? '10px' : '15px;')};
  font-weight: normal;
  position: absolute;
  transition: all 0.15s ease;
  pointer-events: none;
  left: 25px;
  top: ${props => (props.focus ? '6px' : '18px')};
  margin: 0;

  .RequiredMarker {
    font-size: ${props => (props.focus ? '5px' : '')};
    margin-left: ${props => (props.focus ? '2px' : '')};
    display: none;
  }
`

const CheckedIcon = styled.img`
  display: inline-block;
  background: #fff;
  position: absolute;
  top: 22px;
  right: 20px;
  pointer-events: none;
`

class RequestForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      fname: '',
      lname: '',
      phone: '',
      company: '',
      role: '',
      NoE: '',
      country: '',
      referral: '',
      styleClass: {
        email: 0,
        fname: 0,
        lname: 0,
        phone: 0,
        company: 0
      },
      touchSelect: {
        role: 0,
        NoE: 0,
        country: 0
      },
      flagFocus: {
        role: false,
        NoE: false,
        country: false
      },
      isCaptchaVerified: false,
      isEmailFailed: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const { styleClass } = this.state
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })

    if (name === 'email') {
      let isPersonalEmail = false

      if (!process.env.GATSBY_DISABLE_CHECK_WORK_EMAIL) {
        let patt = new RegExp(
          '(gmail.com|googlemail.com|outlook.com|hotmail.com|live.com|live.co.|yahoo.com|yahoo.co.|yahoo.|ymail.com|inbox.com|icloud.com|facebook.com|mail.com|aol.com|msn.com|yandex.ru|mail.ru)'
        )
        isPersonalEmail = patt.test(value)

        this.setState({
          isEmailFailed: value && isPersonalEmail ? true : null
        })
      }

      if (!value) {
        styleClass.email = 1
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ||
        isPersonalEmail
      ) {
        styleClass.email = 1
      } else {
        styleClass.email = 2
      }
    }

    if (name === 'fname' || name === 'lname' || name === 'country') {
      if (!value) {
        styleClass[name] = 1
      } else if (
        !/^[A-Z\sÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/i.test(
          value
        )
      ) {
        styleClass[name] = 1
      } else {
        styleClass[name] = 2
      }
    }

    if (name === 'company') {
      if (!value) {
        styleClass[name] = 1
      } else if (
        !/^[A-Z0-9\sÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/i.test(
          value
        )
      ) {
        styleClass[name] = 1
      } else {
        styleClass[name] = 2
      }
    }

    if (name === 'phone') {
      if (!value) {
        styleClass.phone = 1
      } else if (!/^[0-9\s+-/(/)]+[0-9]$/.test(value)) {
        styleClass.phone = 1
      } else {
        styleClass.phone = 2
      }
    }

    this.setState({
      styleClass
    })
  }

  handleChangeRole = role => {
    this.setState(prevState => ({
      role,
      touchSelect: {
        ...prevState.touchSelect,
        role: 2
      }
    }))
  }
  handleChangeNoE = NoE => {
    this.setState(prevState => ({
      NoE,
      touchSelect: {
        ...prevState.touchSelect,
        NoE: 2
      }
    }))
  }
  handleChangeCountry = country => {
    this.setState(prevState => ({
      country,
      touchSelect: {
        ...prevState.touchSelect,
        country: 2
      }
    }))
  }
  handleSubmit = async e => {
    e.preventDefault()
    const { styleClass, touchSelect } = this.state
    const draft = _.pick(this.state, [
      'email',
      'fname',
      'lname',
      'phone',
      'company',
      'role',
      'NoE',
      'country',
      'isCaptchaVerified'
    ])
    let flagAllTrue = true
    Object.keys(draft).forEach((key, index) => {
      if (!draft[key]) {
        flagAllTrue = false
        if (
          ['email', 'fname', 'lname', 'phone', 'company', 'country'].includes(
            key
          )
        ) {
          styleClass[key] = 1
        } else {
          touchSelect[key] = 1
        }
      }
    })
    this.setState({
      styleClass,
      touchSelect
    })
    if (flagAllTrue) {
      const data = {
        email: this.state.email,
        firstName: this.state.fname,
        lastName: this.state.lname,
        phone: this.state.phone,
        company: this.state.company,
        role: this.state.role.value,
        numberOfEmployees: this.state.NoE.value,
        country: this.state.country,
        referral: this.state.referral,
        captchaResponse: this.state.captchaResponse // for verify recaptcha
      }

      try {
        // create request
        await api.creatRequest(data)
        this.props.onSubmit()
      } catch (e) {
        // if error, reset recaptcha and print error
        resetRecaptcha()
        this.setState({
          isCaptchaVerified: false
        })
        toast.error(
          this.props.intl.formatMessage({
            id: `${scope}.error`
          })
        )
      }
    }
  }

  handleVerifyCaptcha = captchaResponse => {
    this.setState({
      isCaptchaVerified: true,
      captchaResponse
    })
  }

  focusSelect = name => {
    this.setState({
      flagFocus: {
        ...this.state.flagFocus,
        [name]: true
      }
    })
  }

  blurSelect = name => {
    if (!this.state[name]) {
      this.setState({
        flagFocus: {
          ...this.state.flagFocus,
          [name]: false
        }
      })
    }
  }

  render() {
    const { title, des } = this.props
    const {
      email,
      fname,
      lname,
      phone,
      company,
      styleClass,
      role,
      NoE,
      country,
      referral,
      touchSelect,
      flagFocus,
      isEmailFailed
    } = this.state

    let disabledSubmitting =
      !this.state.isCaptchaVerified ||
      styleClass.email === 1 ||
      !fname ||
      !lname ||
      !phone ||
      !company ||
      !role ||
      !NoE ||
      !country ||
      isEmailFailed 

    return (
      <FromWrapper>
        <TextCenter>
          <Title>{title}</Title>
          <SubTitle>{des}</SubTitle>
        </TextCenter>

        {this.state.isEmailFailed && (
          <Alert
            message={{
              type: 'error',
              content: (
                <FormattedMessage tagName="span" id={`${scope}.emailWarning`} />
              )
            }}
          />
        )}

        <form onSubmit={this.handleSubmit}>
          <FormField>
            <FormInputCustom
              type="email"
              id="email"
              value={email}
              status={styleClass.email}
              name="email"
              onChange={this.handleInputChange}
              required
              pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
            <Label focus={email}>
              <FormattedMessage id={`${scope}.email`} />
              <RequiredMarker />
            </Label>
          </FormField>

          <CustomRow spacing={12} className="row-name">
            <Col xs={6}>
              <FormField>
                <FormInputCustom
                  type="text"
                  value={fname}
                  status={styleClass.fname}
                  name="fname"
                  onChange={this.handleInputChange}
                  required
                />
                <Label focus={fname}>
                  <FormattedMessage id={`${scope}.firstName`} />
                  <RequiredMarker />
                </Label>
              </FormField>
            </Col>
            <Col xs={6}>
              <FormField>
                <FormInputCustom
                  type="text"
                  value={lname}
                  status={styleClass.lname}
                  name="lname"
                  onChange={this.handleInputChange}
                  required
                />
                <Label focus={lname}>
                  <FormattedMessage id={`${scope}.lastName`} />
                  <RequiredMarker />
                </Label>
              </FormField>
            </Col>
          </CustomRow>

          <FormField>
            <FormInputCustom
              type="text"
              value={phone}
              status={styleClass.phone}
              name="phone"
              onChange={this.handleInputChange}
              required
            />
            <Label focus={phone}>
              <FormattedMessage id={`${scope}.phone`} />
              <RequiredMarker />
            </Label>
          </FormField>

          <FormField>
            <FormInputCustom
              type="text"
              id="company"
              value={company}
              status={styleClass.company}
              name="company"
              onChange={this.handleInputChange}
              required
            />
            <Label focus={company}>
              <FormattedMessage id={`${scope}.company`} />
              <RequiredMarker />
            </Label>
          </FormField>

          <FormField>
            <SelectI18n
              id="role"
              isSearchable={false}
              value={role}
              options={roleOption}
              placeholder=""
              styles={selectStyle()}
              onChange={this.handleChangeRole}
              onFocus={() => this.focusSelect('role')}
              onBlur={() => this.blurSelect('role')}
            />
            <HiddenInput required value={_.get(role, 'value')} />
            <Label focus={role || flagFocus.role}>
              <FormattedMessage id={`${scope}.role`} />
              <RequiredMarker />
            </Label>
            {touchSelect.role === 2 && <CheckedIcon src={icon} alt="" />}
          </FormField>

          <CustomRow spacing={12}>
            <Col sm={6}>
              <FormField>
                <Select
                  isSearchable={false}
                  value={NoE}
                  options={NoEOption}
                  placeholder=""
                  styles={selectStyle()}
                  onChange={this.handleChangeNoE}
                  onFocus={() => this.focusSelect('NoE')}
                  onBlur={() => this.blurSelect('NoE')}
                />
                <HiddenInput required value={_.get(NoE, 'value')} />
                <Label focus={NoE || flagFocus.NoE}>
                  <FormattedMessage id={`${scope}.number`} />
                  <RequiredMarker />
                </Label>
                {touchSelect.NoE === 2 && <CheckedIcon src={icon} alt="" />}
              </FormField>
            </Col>
            <Col sm={6}>
              <FormField>
                <FormInputCustom
                  type="text"
                  id="country"
                  value={country}
                  status={styleClass.country}
                  name="country"
                  onChange={this.handleInputChange}
                  required
                />
                <Label focus={country}>
                  <FormattedMessage id={`${scope}.country`} />
                  <RequiredMarker />
                </Label>
              </FormField>
            </Col>
          </CustomRow>

          <FormField>
            <FormInputCustom
              type="text"
              id="referral"
              value={referral}
              name="referral"
              onChange={this.handleInputChange}
            />
            <Label focus={referral}>
              <FormattedMessage id={`${scope}.referral`} />
            </Label>
          </FormField>

          <FormField className="overflow-hidden">
            <Recaptcha
              verifyCallback={this.handleVerifyCaptcha}
              action="request_demo"
            />
          </FormField>

          <FormField>
            <TermsLabel>
              <FormattedMessage id={`${scope}.accept`} />
            </TermsLabel>
            &nbsp;
            <TermsLink to={`${this.props.langUri}/terms`} target="_blank">
              <FormattedMessage id={`${scope}.termsAndConditions`} />
            </TermsLink>
          </FormField>

          <SubmitBtn type="submit" disabled={disabledSubmitting}>
            <FormattedMessage tagName="span" id={`${scope}.submit`} />
          </SubmitBtn>
        </form>
      </FromWrapper>
    )
  }
}
RequestForm.propTypes = {
  title: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
  showTks: PropTypes.func
}

export default injectIntl(RequestForm)
