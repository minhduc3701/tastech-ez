// import React, { useEffect, useState } from "react"
// import { graphql, navigate } from "gatsby"
// import SEO from "../../components/seo"
// import {layoutWithLangKey} from "../../components/layout"
// 
// import { injectIntl, FormattedMessage } from 'react-intl'
 import _ from 'lodash'
// import { Wrapper, PageTitle } from './style'
// import { Container } from '../../styles'
// 
// import { Row, Col } from 'reactstrap'
// import BlogSidebar from  '../../components/BlogSidebar'
// import BlogList from '../../components/BlogList'
// 
import api from '../../modules/api'

// 
// const Search = (props, { location }) => {
//   const [keyword, setKeyword] = useState(_.last(_.get(props, 'location.search', '').split("?s=")))
//   const [results, setResults] = useState([])
// 
//   // let keyword = _.last(_.get(props, 'location.search', '').split("?s="))
// 
//   const fetchData = async str => {
//    const res = await api.searchBlogPosts(str)
//    setResults(res)
//   }
// 
//   useEffect(() => {
//     fetchData(keyword)
//   }, [keyword])
// 
//   // console.log('aaa', results)
// 
//   // let posts = _.get(props.data, 'allWordpressPost.edges', [])
// 
//   let post = []
//   return (
//     <Wrapper>
// 
//     <Container>
//       <SEO title="Blog" />
// 
//       <Row>
//         <Col md={8}>
// 
//         <PageTitle>
//           <FormattedMessage id="blog.searchResults" />
//           &nbsp;"
//           {keyword.split("+").join(" ")}
//           "
//           ({posts.length})
// 
//         </PageTitle>
// 
//           <BlogList 
//             posts={posts}
//             langUri={props.langUri}
//           />
//         </Col>
//         <Col md={4}>
//           <BlogSidebar
//           langUri={props.langUri}
//           langKey={props.langKey}
//         />
//         </Col>
//       </Row>
//     </Container>
//     </Wrapper>
//   )
// }
// 
// export const query = graphql`
//   query {
//     allWordpressPost(sort: {fields: date, order: DESC}) {
//       edges {
//         node {
//           title
//           excerpt
//           content
//           slug
//           date(formatString: "MMMM DD, YYYY")
//           featured_media {
//             source_url
//           }
//           categories {
//             name
//             slug
//           }
//           polylang_current_lang
//         }
//       }
//     }
//   
//   }
//   `
// 
// export default layoutWithLangKey(injectIntl(Search))

 import React, { useState, useEffect } from 'react'
 import { navigate } from "gatsby"
 
 const BlogSearch = () => {
   const [keyword, setKeyword] = useState('')
   const handleSubmit = e => {
     e.preventDefault()
 
     if (keyword.trim()) {
       navigate(
         `/blog/search?s=${keyword.trim().split(" ").join("+")}`,
         {state: { keyword } }
       )
     }
   }
 return (
   <div className="widget">
     <div className="widget-content">
     <form
     onSubmit={handleSubmit}
   >
     <input
       type="text"
       value={keyword}
       onChange={e => setKeyword(e.target.value)}
     />
 
   </form>
   </div>
   </div>
   )
 
 }
 
 const SearchPage = (props) => {
  // const [keyword, setKeyword] = useState(props.location.state.keyword)
   const [results, setResults] = useState([])
  
   const fetchData = async str => {
    const res = await api.searchBlogPosts(str)
    setResults(res.data)
   }
 
   useEffect(() => {
     fetchData(props.location.state.keyword)
   }, [props.location.state.keyword])

  return (
   <div>
     Keyword:
     {
       props.location.state.keyword
     }
 
     <BlogSearch />

     {
        _.isEmpty(results) ?
        <h3>No result</h3>
        :
        results.map(result => (
        <h3  dangerouslySetInnerHTML={{ __html: result.title.rendered }} />
        ))
     }

     </div>
   )
 }
 
 export default SearchPage
