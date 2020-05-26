import React, { useState, useEffect } from 'react'
import {layoutWithLangKey} from "../../components/layout"
import SEO from '../../components/seo'
import { injectIntl } from 'react-intl'
import api from '../../modules/api'
import { Link } from 'gatsby'
import _ from 'lodash'

import { Wrapper } from '../../styles/blogStyle'
import { Container } from '../../styles'


const Blog = props => {
  const [blogPosts, setBlogPosts] = useState([])

  const { formatMessage } = props.intl

  const getBlogPosts = async () => {
     try {
 
         const res = await api.getBlogPosts()
         
         setBlogPosts(res.data)
 
       } catch (e) {
          console.log(e)
       }
  }

  useEffect(() => {
    getBlogPosts()
  }, [])

  // console.log(blogPosts)
  return (
    <Wrapper>
      <SEO
        title={formatMessage({ id: "contact.meta.title" })}
        description={formatMessage({ id: "contact.meta.description" })}
        lang={props.langKey}
        uri={props.uri}
      />

      <Container>

        {blogPosts.map((post, index) => (
          <div key={index}> 
            <div className="row">
              <div className="col-md-3">
                <Link to={`${props.langUri}/blog/${post.slug}`}>
                  <img src={post.jetpack_featured_media_url} alt=""/>
                </Link>
              </div>

              <div className="col-md-9">
                <Link to={`${props.langUri}/blog/${post.slug}`}>
                <h3 dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                </Link>
                <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
              </div>
            </div>
            <hr/>
          </div>
          ))}

      </Container>
    </Wrapper>
  )
}

export default layoutWithLangKey(injectIntl(Blog))
