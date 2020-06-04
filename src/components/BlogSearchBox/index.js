import React, { useState } from "react";
import { navigate } from "gatsby"
import { Form, Input, Button } from './style'
// npm install --save-dev @iconify/react @iconify/icons-ri
import { Icon, InlineIcon } from '@iconify/react';
import searchLine from '@iconify/icons-ri/search-line';
import { injectIntl } from 'react-intl'


const BlogSearch = props => {
  const [keyword, setKeyword] = useState('')
  const handleSubmit = e => {
    e.preventDefault()

    if (keyword.trim()) {
      navigate(
        `${props.langUri}/blog/search?s=${keyword.trim().split(" ").join("+")}`,
        {state: { keyword } },
        {replace: true}
      )
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

export default injectIntl(BlogSearch)
