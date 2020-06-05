import React, { useState } from "react";
import { navigate } from "gatsby"
import { Form, Input, Button } from './style'
import { Icon } from '@iconify/react';
import searchLine from '@iconify/icons-ri/search-line';
import { injectIntl } from 'react-intl'
import { connect } from "react-redux"


const BlogSearchBox = props => {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (keyword.trim()) {
      props.updateKeyword(keyword.trim())
      
      navigate(`${props.langUri}/blog/search?s=${keyword.trim().split(" ").join("+")}`)
    }
  }

return (
  <div className="widget">
    <div className="widget-content">
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
  connect(mapStateToProps, mapDispatchToProps)(BlogSearchBox)
  )
