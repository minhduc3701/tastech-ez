import React from "react";
import { navigate } from "gatsby"

const BlogSearch = props => {
return (
  <div className="widget">
    <div className="widget-content">
    <form
    onSubmit={event => {
      event.preventDefault()
      // TODO: do something with form values
      navigate(`${props.langUri}/blog/?s=trip`)
    }}
  >
    <input type="text"/>
  </form>
  </div>
  </div>
  )

}

export default BlogSearch
