import React, { useState } from "react";
import { navigate } from "gatsby"
import { Icon } from '@iconify/react';
import searchLine from '@iconify/icons-ri/search-line';
import { connect } from "react-redux"
import { injectIntl, FormattedMessage } from 'react-intl'
import { Wrapper, Form, Input, Button, Title, TextContact } from './style'
import { Container } from '../../styles'
import { Row, Col } from 'reactstrap'

const SupportSearchBox = props => {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (keyword.trim()) {
      props.updateKeyword(keyword.trim())
      
      if (typeof window !== 'undefined') {
        navigate(`${props.langUri}/support/search?s=${keyword.trim()}`)
      }
      
    }
  }

return (
  <Wrapper>
  <Container>
    <Row className="justify-content-center">
    <Col lg={8} xs={10}>
    <Title><FormattedMessage id="support.search.heading" /></Title>
    <Form
    onSubmit={handleSubmit}
  >
    <Input
      type="text"
      value={keyword}
      onChange={e => setKeyword(e.target.value)}
      placeholder={props.intl.formatMessage({id: "support.search.placeholder"})}
    />

    <Button type="submit">
      <Icon icon={searchLine} />
    </Button>
  </Form>
      <TextContact>
        <FormattedMessage id="support.search.contact" />
        &nbsp;
        <a href="mailto:support@ezbiztrip.com">support@ezbiztrip.com</a>
      </TextContact>
          </Col>
    </Row>
</Container>
  </Wrapper>
  )

}

const mapStateToProps = state => {
  return {
    keyword: state.keyword
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateKeyword: payload => dispatch({ type: `SET_KEYWORD`, payload })
  }
}

export default injectIntl(
  connect(mapStateToProps, mapDispatchToProps)(SupportSearchBox)
  )
