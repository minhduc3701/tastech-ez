import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import {
  Wrapper,
  GuideText,
  MainCategories,
  MainCategory
} from './style'
import { Container } from '../../styles'
import _ from 'lodash'
import { FormattedMessage } from 'react-intl'

const findImage = str => {
  if (!str || typeof document === 'undefined') {
      return null
    }
  let div = document.createElement('div')
  div.innerHTML = str
  let firstImage = div.getElementsByTagName('svg')[0]
  
  if (!firstImage) {
    return null
  }

  return firstImage.outerHTML
}

const findOrder = str => {
  if (!str || typeof document === 'undefined') {
      return null
    }
  let div = document.createElement('div')
  div.innerHTML = str
  let order = div.getElementsByTagName('code')[0]
  
  if (!order) {
    return 0
  }

  return order.getAttribute('data-order')
}

const SupportCategories = props => {
return (
  <StaticQuery
    query={graphql`
      query {
        allWordpressCategory(filter: {slug: {regex: "/^(?!uncategorized).*$/"}, parent_element: {slug: {in: ["en", "vi", "id", "th"]}}, _links: {about: {elemMatch: {href: {regex: "/support.ezbiztrip.com/" }}}}}) {
          nodes {
              count
              name
              slug
              description
              parent_element {
                slug
              }
          }
        }
      }
      `}

      render={data => {
        let categories = data.allWordpressCategory.nodes
           .filter(node => _.get(node, 'parent_element.slug') === props.langKey)

        if (_.isEmpty(categories)) {
          return <div></div>
        }

        return (
         <Wrapper>
          <Container>
           <GuideText><FormattedMessage id="support.exploreByCategory" /></GuideText>
          
          <MainCategories>
            <ul>
           {!_.isEmpty(categories) && categories.map(node => (
              <li key={node.slug} style={{order: findOrder(_.get(node, 'description'))}}>
                 <MainCategory
                   to={`${props.langUri}/support/category/${node.slug}`}
                   active={node.slug === _.get(props, 'currentCategorySlug')}
                 >
                  <div className="icon" dangerouslySetInnerHTML={{ __html: findImage(_.get(node, 'description')) }} />
                  <h3 className="title" dangerouslySetInnerHTML={{ __html: node.name }} />
                 </MainCategory>
                 </li>
                 ))}
            </ul>
           </MainCategories>

           </Container>
         </Wrapper>
        )
      }}
  />
  )

}

export default SupportCategories
