import React from 'react'
import { loadReCaptcha, ReCaptcha } from 'react-recaptcha-v3'

// create a variable to store the component instance
let recaptchaInstance

// create a reset function
// @see https://github.com/codeep/react-recaptcha-v3/issues/2
export const resetRecaptcha = () => {
  recaptchaInstance.execute()
}

class RecaptchaV3 extends React.Component {
  componentDidMount() {
    loadReCaptcha(process.env.GATSBY_CAPTCHA_V3_KEY)
  }

  render() {
    return (
      <ReCaptcha
        ref={ref => (recaptchaInstance = ref)}
        sitekey={process.env.GATSBY_CAPTCHA_V3_KEY}
        action={this.props.action}
        verifyCallback={this.props.verifyCallback}
      />
    )
  }
}

export default RecaptchaV3
