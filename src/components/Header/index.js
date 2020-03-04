import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FormattedMessage, injectIntl } from 'react-intl'
import companyLogo from '../../images/logo.svg'
import SelectLanguage from '../SelectLanguage'

import {
  Nav
} from 'reactstrap'

import { Icon } from '@iconify/react'
import baselineClose from '@iconify/icons-ic/baseline-close'
import baselineMoreVert from '@iconify/icons-ic/baseline-more-vert'

const scope = 'components.Common.Header'

const HeaderWrapper = styled.div`
  background-color: #1d2148;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 98;
  padding: 0 32px;

  &.header-visible {
    visibility: visible;
    transition: all 0.1s ease-in;
  }

  &.header-hidden {
    visibility: hidden;
    transition: all 0.2s ease-out;
    transform: translateY(-100%);
  }

  @media screen and (max-width: 1199px) {
    padding: 0 16px;
  }
`
const HeaderNavbar = styled.div`
  display: flex;
  width: 100%;
  height: 64px;
  padding: 0 !important;
  justify-content: space-between;
  position: relative;

  @media screen and (max-width: 1199px) {
    height: 56px;
    justify-content: center;
  }
`

const HeaderNavBrand = styled(Link)`
  display: flex;
  height: 100%;
  align-items: center;

  img {
    height: 30px;
  }

  @media screen and (min-width: 1200px) {
    flex: 0 0 300px;
  }

  @media screen and (max-width: 1199px) {
    img {
      height: 24px;
    }
  }
`

const HeaderCollapse = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  transition: all 0.3s ease-in-out;
  position: relative;

  .languageSwitcher,
  .startBtn {
    display: none;
  }

  .close-btn {
    color: #fff;
    font-size: 20px;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    display: none;
  }

  @media screen and (max-width: 1199px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    max-width: 100%;
    height: 100vh;
    overflow: auto;
    background-color: #1d2148;
    z-index: 99;
    display: block;
    transform: translateX(-100%);
    margin: 0;
    padding: 15px 32px;

    &.menu-open {
      transform: translateX(0);
    }

    .languageSwitcher,
    .startBtn {
      display: inline-block;
    }

    .close-btn {
      display: inline-flex;
    }
  }
`

const MainNav = styled(Nav)`
  height: 100%;
  display: flex;
  flex-direction: row !important;

  li {
    margin-right: 40px;

    &:last-child {
      margin-right: 0;
    }
  }

  a {
    color: #9197b5;
    font-size: 14px;
    position: relative;
    transition: all .3s ease-in-out;
    display: flex;
    align-items: center;
    height: 100%;

    &:after {
      content: "";
      display: inline-block
      width: 0;
      height: 2px;
      background-color: #f4b400;
      transition: all .3s ease-in-out;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }

    &:hover {
      color: #fff;
      text-decoration: none;
    }

    &.active {
      color: #fff;

      &:after {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 1199px) {
    display: block !important;
    height: auto;
    margin-top: 15px;

    li {
      margin-right: 0;
    }

    a {
      padding: 12px 0;

      &:after {
        display: none;
      }
    }
  }
`

const SubNav = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row !important;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 1200px) {
    flex: 0 0 300px;
  }

  @media screen and (max-width: 1199px) {
    position: absolute;
    right: 0;
    top: 0;

    .startBtn,
    .languageSwitcher {
      display: none;
    }
  }
`

const StartBtn = styled(Link).attrs({ className: 'startBtn' })`
  height: 32px;
  line-height: 32px;
  font-size: 13px;
  color: #fff;
  border-radius: 28px;
  background-color: #f4b400;
  padding: 0 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #fff;
    text-decoration: none;
    background-color: #e3a800;
  }

  @media screen and (max-width: 1199px) {
    // display: none;
  }
`

const LoginBtn = styled.a`
  display: inline-block;
  font-size: 13px;
  border: none;
  color: #9197b5;
  padding: 10px 0;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
  margin: 0 32px;
  white-space: nowrap;

  &:hover {
    text-decoration: none;
    color: #fff;
  }

  @media screen and (max-width: 1199px) {
    margin: 0;
    color: #fff;
  }
`

const MenuToggler = styled.span`
  cursor: pointer;
  color: #fff;
  font-size: 24px;
  padding: 0;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media screen and (max-width: 1199px) {
    display: inline-flex;
  }
`

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 98;
`

class Header extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.handleScroll = this.handleScroll.bind(this)

    this.state = {
      menuOpen: false,
      headerShow: true,
      scrollPos: 0
    }
  }
  toggle() {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  handleScroll() {
    const { scrollPos } = this.state

    let boundingTop = document.body.getBoundingClientRect().top
    this.setState({
      scrollPos: boundingTop,
      headerShow: boundingTop > 0 ? true : boundingTop > scrollPos
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    let { langKey } = this.props

    let subNavigation = (
      <SubNav navbar>
            <SelectLanguage langs={this.props.langs} />

            <LoginBtn href={`/app?lang=${langKey}`}>
              <FormattedMessage id={`${scope}.login`} />
            </LoginBtn>

            <StartBtn to={`/${langKey}/request-demo`}>
              <FormattedMessage id={`${scope}.getStarted`} />
            </StartBtn>

        }
      </SubNav>
    )

    let headerClassName = this.state.menuOpen
      ? ''
      : this.state.headerShow
      ? 'header-visible'
      : 'header-hidden'

    let { menuOpen } = this.state

    const { formatMessage } = this.props.intl

    return (
      <HeaderWrapper className={headerClassName}>
        <HeaderNavbar>
          <MenuToggler onClick={this.toggle}>
            <Icon icon={baselineMoreVert} />
          </MenuToggler>

          <HeaderNavBrand exact to={`/${langKey}`}>
            <img src={companyLogo} alt="" />
          </HeaderNavBrand>

          <HeaderCollapse className={menuOpen ? 'menu-open' : ''}>
            <span className="close-btn" onClick={this.toggle}>
              <Icon icon={baselineClose} />
            </span>

            <StartBtn to={`/${langKey}/request-demo`}>
              <FormattedMessage id={`${scope}.getStarted`} />
            </StartBtn>

            <MainNav navbar>
              <li>
                <Link activeClassName="active" exact to={`/${langKey}`}>
                  <FormattedMessage id={`${scope}.home`} />
                </Link>
              </li>
              <li>
                <Link activeClassName="active" to={`/${langKey}/features`}>
                  <FormattedMessage id={`${scope}.feature`} />
                </Link>
              </li>
              <li>
                <Link activeClassName="active" to={`/${langKey}/pricing`}>
                  <FormattedMessage id={`${scope}.pricing`} />
                </Link>
              </li>
              <li>
                <Link activeClassName="active" to={`/${langKey}/about`}>
                  <FormattedMessage id={`${scope}.aboutUs`} />
                </Link>
              </li>
              <li>
                <a href={formatMessage({
                    id: 'link.blog'
                  })} target="_blank" rel="noopener noreferrer">
                  <FormattedMessage id={`${scope}.blog`} />
                </a>
              </li>
              <li>
                <a href={formatMessage({
                    id: 'link.support'
                  })} target="_blank" rel="noopener noreferrer">
                  <FormattedMessage id={`${scope}.support`} />
                </a>
              </li>
            </MainNav>
            <SelectLanguage langs={this.props.langs} />
          </HeaderCollapse>

          {menuOpen && <Overlay onClick={this.toggle} />}
          {subNavigation}
        </HeaderNavbar>
      </HeaderWrapper>
    )
  }
}

export default injectIntl(Header)
