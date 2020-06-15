import React from "react"
import { StaticQuery, graphql } from "gatsby"

import {
  Wrapper,
  GuideText,
  ParentCategories,
  ParentCategory,
  CurrentParentCategory,
  Categories,
  Category
} from './style'
import { Container } from '../../styles'
import _ from 'lodash'
import { FormattedMessage } from 'react-intl'
import { findOrder, findSvg } from '../../modules/extractContent'
import { Row, Col } from 'reactstrap'

const SupportCategories = props => {

return (
  <StaticQuery
    query={graphql`
      query {
        allWordpressCategory(filter: {slug: {regex: "/^(?!uncategorized).*$/"}, parent_element: {parent_element: {slug: {regex: "/^(?!'').*$/"}}}, link: {regex: "/support.ezbiztrip.com/"}}) {
          nodes {
              name
              slug
              description
              parent_element {
                slug
                name
                description
                parent_element {
                  slug
                }
              }
          }
        }
      }
      `}

      render={data => {
        let categories = data.allWordpressCategory.nodes
          .filter(node => _.includes([_.get(node, 'parent_element.slug'), _.get(node, 'parent_element.parent_element.slug')], props.langKey) )


        let parentCategories = _.uniqBy(
          categories.map(cat => {
            return {
              ...cat.parent_element,
              children_element: [...categories.filter(f => f.parent_element.slug === cat.parent_element.slug).map(m => _.pick(m, ['name', 'slug', 'description']))]
            }
          }),
          'slug'
        ).map(p => {
          let redirect = p.children_element.find(c => _.isEqual(findOrder(c.description), '1')) || _.first(p.children_element)
          let icon = findSvg(_.get(p, 'description'))
          return {
            ..._.pick(p, ['name', 'slug', 'description']),
            redirect_slug: redirect.slug,
            icon
          }
        })
        .sort((a, b) => (findOrder(_.get(a, 'description')) || 99) - findOrder(_.get(b, 'description')) )

        let filteredCategories = categories.filter(cat => cat.parent_element.slug === _.get(props, 'currentParentCategory.slug'))

        return (
         <Wrapper id="s1">
          <Container>
           <GuideText><FormattedMessage id="support.exploreByCategory" /></GuideText>
          
          <ParentCategories>
            <ul>
           {!_.isEmpty(parentCategories) && parentCategories.map(cat => (
              <li key={cat.slug}>
                 <ParentCategory
                   to={`${props.langUri}/support/category/${cat.slug}/${cat.redirect_slug}#s1`}
                   className={cat.slug === _.get(props, 'currentParentCategory.slug') ? 'active' : ''}
                 >
                  <div className="icon" dangerouslySetInnerHTML={{ __html: cat.icon }} />
                  <h3 className="title" dangerouslySetInnerHTML={{ __html: cat.name }} />
                 </ParentCategory>
                 </li>
                 ))}
            </ul>
           </ParentCategories>

          {_.get(props, 'currentParentCategory') && (
            <CurrentParentCategory id="s2">
              <Row className="justify-content-center">
                <Col lg={6} md={8}>
                  <h2 className="title" dangerouslySetInnerHTML={{ __html: _.get(props, 'currentParentCategory.name')}} />
                  <div className="description" dangerouslySetInnerHTML={{ __html: _.get(props, 'currentParentCategory.description')}} />
                </Col>
              </Row>
            </CurrentParentCategory>
          )}

          <Categories>
            <ul>
              {!_.isEmpty(filteredCategories) && filteredCategories.map(cat => (
                <li key={cat.slug} style={{order: findOrder(_.get(cat, 'description'))}}>
                  <Category
                     to={`${props.langUri}/support/category/${cat.parent_element.slug}/${cat.slug}#s2`}
                     className={cat.slug === _.get(props, 'currentCategorySlug') ? 'active' : ''}
                   >
                    <span className="title" dangerouslySetInnerHTML={{ __html: cat.name }} />
                   </Category>
                </li>
                ))}
            </ul>
          </Categories>

           </Container>
         </Wrapper>
        )
      }}
  />
  )

}

export default SupportCategories
