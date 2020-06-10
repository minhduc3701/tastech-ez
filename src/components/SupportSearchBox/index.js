import React, { useState } from "react";
import { navigate } from "gatsby"
import { Form, Input, Button } from './style'
import { Icon } from '@iconify/react';
import searchLine from '@iconify/icons-ri/search-line';
import { injectIntl } from 'react-intl'
import { connect } from "react-redux"


const SupportSearchBox = props => {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (keyword.trim()) {
      props.updateKeyword(keyword.trim())
      
      if (typeof window !== 'undefined') {
        navigate(`${props.langUri}/blog/search?s=${keyword.trim()}`)
      }
      
    }
  }

  return <div></div>

return (
  <div>
    <Form
    onSubmit={handleSubmit}
  >
    <Input
      type="text"
      value={keyword}
      onChange={e => setKeyword(e.target.value)}
      placeholder={props.intl.formatMessage({id: "blog.searchPlaceholder"})}
    />

    <Button type="submit">
      <Icon icon={searchLine} />
    </Button>
  </Form>
  </div>
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
