import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { 
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap'
import styled from 'styled-components'


import { Icon } from '@iconify/react'
import flagForVietnam from '@iconify/icons-twemoji/flag-for-vietnam'
import flagForUnitedKingdom from '@iconify/icons-twemoji/flag-for-united-kingdom'
import flagForIndonesia from '@iconify/icons-twemoji/flag-for-indonesia'
import flagForThailan from '@iconify/icons-twemoji/flag-for-thailand'
import bxChevronDown from '@iconify/icons-bx/bx-chevron-down'
import baselineLanguage from '@iconify/icons-ic/baseline-language'

const LanguageSwitcher = styled(UncontrolledDropdown).attrs({
  className: 'languageSwitcher'
})`
  > button {
    padding-left: 0;
    padding-right: 0;
  }

  svg {
    font-size: 24px;
    position: relative;
  }
`
const LanguageDropdownToggle = styled(DropdownToggle)`
  color: #9197b5 !important;
  background-color: transparent !important;
  border: none;
  outline: none !important;
  box-shadow: none !important;

  &:after {
    font-size: 14px;
    margin-left: 5px !important;
  }

  span {
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 400;
  }

  &:hover {
    color: #fff !important;
  }

  .icon-before, .icon-after {
    display: none;
  }
`

const LanguageDropdownItem = styled(Link)`
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  color: #222222;
  background-color: transparent;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 11px 25px;
  align-items: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  svg {
    font-size: 24px;
    position: relative;
    margin-right: 14px;
  }

  &:hover {
    background-color: #f5f5f5;
    text-decoration: none;
    color: #222;
  }
`

const LanguageDropdownContent = styled(DropdownMenu)`
  border-radius: 10px !important;
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.15);
  border: none !important;
  top: 40px !important;
  left: auto !important;
  right: -14px !important;
  transform: translate3d(0, 0, 0) !important;
  padding: 10px 0 !important;
  width: 220px;

  &:focus  {
    outline: none !important;
  }
`

const flags = {
  'en': {
    name: 'English',
    image: <Icon icon={flagForUnitedKingdom} />
  },
  'vi': {
    name: 'Vietnam',
    image: <Icon icon={flagForVietnam} />
  },
  'id': {
    name: 'Indonesia',
    image: <Icon icon={flagForIndonesia}/>
  },
  'th': {
    name: 'Thailand',
    image: <Icon icon={flagForThailan}/>
  }
}

const SelectLanguage = (props) => {
  let links = []

  props.langs.forEach(lang => {
    links = [...links, {
      ...lang,
      ...flags[lang.langKey]
    }]
  })

  return (
    <LanguageSwitcher>
      <LanguageDropdownToggle caret>
        <Icon className="icon-before" icon={baselineLanguage} />
         <span>{props.langs.filter(lang => lang.selected)[0].langKey}</span>
        <Icon className="icon-after" icon={bxChevronDown} />
       </LanguageDropdownToggle>
       <LanguageDropdownContent>
         {links.map(link => (
            <LanguageDropdownItem
              key={link.langKey}
              to={link.link}
            >
              {link.image}
              {link.name}
            </LanguageDropdownItem>
          ))
        }
       </LanguageDropdownContent>
    </LanguageSwitcher>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;
