import React, { Component } from 'react'
import rd_bg from '../../images/rd-bg-1.jpg'
import tks_img from '../../images/tks-letter.svg'
import styled from 'styled-components'
import RequestForm from '../../components/Common/RequestForm'
import { FormattedHTMLMessage, injectIntl } from 'react-intl'
import { Container } from '../../styles'
import {layoutWithLangKey} from "../../components/layout"
import queryString from 'query-string'
import SEO from '../../components/seo'

const scope = 'page.RequestDemo'

const Wrapper = styled.div`
  padding-bottom: 100px;

  @media screen and (max-width: 767px) {
    padding: 50px 0;
    background-image: url(${rd_bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`

const BackGround = styled.div`
  background-image: url(${props => props.src || ''});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 350px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`
const FormWrapper = styled.div`
  margin-top: -270px;
  text-align: center;

  @media screen and (max-width: 767px) {
    margin-top: 0;
  }
`

const TksWrapper = styled.div`
  margin-top: -220px;

  @media screen and (max-width: 767px) {
    margin-top: 0;
  }
`

const TksContent = styled.div`
  display: block;
  text-align: center;
  max-width: 570px;
  padding: 60px;
  border-radius: 10px;
  box-shadow: 0 3px 35px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  margin: auto;

  @media screen and (max-width: 767px) {
    padding: 40px 32px;
  }
`
const TksImg = styled.img``
const TksText = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: #323232;
  margin-top: 28px;

  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`
const NoticeText = styled.p`
  font-size: 15px;
  margin-top: 13px;
  color: #707070;
`

class RequestDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tksFlag: false
    }
  }
  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    this.setState({
      tksFlag: parsed.thanks === '1'
    })
  }
  showResults = values => {
    // await sleep(500); // simulate server latency
    // window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    this.setState({
      tksFlag: !this.state.tksFlag
    })
  }
  showTks = () => {
    this.setState({
      tksFlag: !this.state.tksFlag
    })
  }
  render() {
    const { formatMessage } = this.props.intl
    const { tksFlag } = this.state

    return (
      <Wrapper>
        <SEO
          title={formatMessage({ id: "requestDemo.meta.title" })}
          description={formatMessage({ id: "requestDemo.meta.description" })}
          lang={this.props.langKey}
          uri={this.props.uri}
        />
        <BackGround src={rd_bg} />

        <Container>
          {!tksFlag ? (
            <FormWrapper>
              <RequestForm
                langUri={this.props.langUri}
                title={formatMessage({ id: `${scope}.formTitle` })}
                des={formatMessage({ id: `${scope}.formDes` })}
                downloadBtn={true}
                showTks={this.showTks}
                onSubmit={this.showResults}
              />
            </FormWrapper>
          ) : (
            <TksWrapper>
              <TksContent>
                <TksImg src={tks_img} />
                <TksText>
                  <FormattedHTMLMessage
                    tagName="span"
                    id={`${scope}.thankYou`}
                  />
                </TksText>
                <NoticeText>
                  <FormattedHTMLMessage
                    tagName="span"
                    id={`${scope}.noticeRequestSuccess`}
                  />
                </NoticeText>
              </TksContent>
            </TksWrapper>
          )}
        </Container>
      </Wrapper>
    )
  }
}

export default layoutWithLangKey(injectIntl(RequestDemo))
