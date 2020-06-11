import React from "react"
import { graphql, navigate } from "gatsby"
import {layoutWithLangKey} from "../../components/layout"
import LoadingPage from '../../components/Common/LoadingPage'
import _ from 'lodash'
import { findOrder } from '../../modules/extractContent'

const CategoryRedirect = props => {
    let categories = props.data.allWordpressCategory.nodes
    let firstCategory = categories.find(node =>  _.isEqual(findOrder(node.description), '1')) || _.first(categories)
    

    if (typeof window === 'undefined') {
     return <div></div>
    }
    
    navigate(`${props.langUri}/support/category/${firstCategory.parent_element.slug}/${firstCategory.slug}`)

    return <LoadingPage height="100vh" />
}


export const query = graphql`
  query($slug: String!) {
    allWordpressCategory(filter: {parent_element: {slug: {eq: $slug}}}) {
    totalCount
    nodes {
      slug
      description
      name
      parent_element {
        slug
        
      }
    }
  }
  
  }
  `

export default layoutWithLangKey(CategoryRedirect)
