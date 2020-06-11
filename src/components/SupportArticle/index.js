import React from "react"
import _ from 'lodash'
import { Collapse } from 'reactstrap'
import { Wrapper, Title, Content, Header, Toggler, LinkDetail } from './style'
import { Icon } from '@iconify/react'
import baselineKeyboardArrowRight from '@iconify/icons-ic/baseline-keyboard-arrow-right'
import outlineMinus from '@iconify/icons-ic/outline-minus'
import outlinePlus from '@iconify/icons-ic/outline-plus'

const SupportArticle = props => {
  const { post } = props

  const handleToggle = () => {
    if (post.slug === props.openSlug) {
      props.setOpenSlug(null)
    } else {
      props.setOpenSlug(post.slug)
    }
  }

  let isOpen = post.slug === props.openSlug

  return (
    <Wrapper>
      <Header onClick={() => handleToggle()}>
        <Toggler>
          {isOpen ?
            <Icon icon={outlineMinus} />
            :
            <Icon icon={outlinePlus} />
          }
        </Toggler>
        <Title className={isOpen ? 'active' : ''} dangerouslySetInnerHTML={{ __html: post.title }} />
        <LinkDetail onClick={e => e.stopPropagation()} to={`${props.langUri}/support/${post.slug}`} title={`${props.langUri}/support/${post.slug}`}>
          <Icon icon={baselineKeyboardArrowRight} />
        </LinkDetail>
      </Header>
      <Collapse isOpen={isOpen}>
        <Content dangerouslySetInnerHTML={{ __html: post.content }} />
      </Collapse>
    </Wrapper>
  )
}

export default SupportArticle