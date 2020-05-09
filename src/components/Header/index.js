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
import bxHomeAlt from '@iconify/icons-bx/bx-home-alt'
import baselinePostAdd from '@iconify/icons-ic/baseline-post-add'
import baselineCreditCard from '@iconify/icons-ic/baseline-credit-card'
import outlineSupervisedUserCircle from '@iconify/icons-ic/outline-supervised-user-circle'
import baselinePictureInPicture from '@iconify/icons-ic/baseline-picture-in-picture'
import outlineAnnouncement from '@iconify/icons-ic/outline-announcement'
import bxChevronDown from '@iconify/icons-bx/bx-chevron-down'
import outlineNewReleases from '@iconify/icons-ic/outline-new-releases';

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
  position: relative;

  .languageSwitcher,
  .startBtn {
    display: none;
  }

  .close-btn {
    color: #fff;
    font-size: 20px;
    position: absolute;
    bottom: 50px;
    left: calc(50% - 20px);
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: solid 1px #212b62;
    display: none;
    transition: all .3s ease-in-out;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #212b62;
      transform: rotate(180deg) !important;
    }
  }

  @media screen and (max-width: 1199px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    max-width: 100%;
    height: 100vh;
    background-color: #1d2148;
    z-index: 99;
    display: block;
    transform: translateX(-100%);
    margin: 0;
    padding: 36px 0 100px 0;

    &.menu-open {
      transform: translateX(0);
    }

    .inner {
      overflow: auto;
      height: calc(100vh - 136px);
      padding-right: 32px;
    }

    .languageSwitcher {
      display: inline-block;
      padding-left: 32px;

      .icon-before {
        display: inline-block;
        font-size: 20px;
        margin-right: 20px;
        position: relative;
        top: -1px;
      }

      .icon-after {
      display: inline-block;
      font-size: 20px;
      margin-left: 12px;

    }

    
      .dropdown-toggle {
        &:after {
          display: none;
        }
      }
      .dropdown-menu {
        position: relative !important;
        position: relative !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        border-radius: 0 !important;
          box-shadow: none;
          background-color: transparent;
          padding: 0 0 0 40px !important;
          margin: 0;
          width: auto;

          a {
            color: #9197b5;
            font-size: 14px;
            padding: 10px 0;
            width: auto;

            &:hover {
              color: #fff;
              background-color: transparent;
            }
          }
      }

      &.show {
        .icon-after {
        transform: rotate(180deg) !important;
      }

      .dropdown-toggle {
        color: #fff !important;
      }
      }
    }

    .startBtn {
      display: inline-block;
      margin-left: 32px;
      width: calc(100% - 32px);
      height: 40px;
      line-height: 40px;
      border-radius: 20px;
      text-align: center;
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
    position: relative;
  }

  > li {
    margin-right: 40px;

    &:last-child {
      margin-right: 0;
    }
  }

  >li>a, >li>span {
    color: #9197b5;
    font-size: 14px;
    position: relative;
    transition: all .3s ease-in-out;
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;

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

  ul {
    position: absolute;
    left: -25px;
    width: 226px;
    height: auto;
    margin: 0;
    padding: 10px 0;
    background: #fff;
    box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    overflow: hidden;

    display: none;

    li {
      margin-top: 1px;
      list-style-type: none;
      
    }

    a {
        color: #222;
        display: block;
        padding: 10px 25px;
        display: flex;
        align-items: center;
        font-size: 13px;
        &:hover {
          background-color: #f5f5f5;
          color: #f4b400;
          text-decoration: none;
        }

        &.active {
          color: #f4b400;
        }
      }
  }

  >li:hover {
    >a, >span {
      color: #fff;
    }
  }

  .menu-icon, .menu-icon-more {
    display: none;
  }

  @media screen and (min-width: 1200px) {
    >li:hover {
      ul {
        display: block !important;
      }
    }
  }

  @media screen and (max-width: 1199px) {
    display: block !important;
    height: auto;
    margin-top: 30px;

    > li {
      margin-right: 0;
    }

    >li>a, >li>span {
      padding: 12px 32px;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;

      &:after {
        display: none;
      }

      &.active {
        background-color: #212b62;
      }
    }

    .menu-icon {
      display: inline-block;
      font-size: 20px;
      margin-right: 20px;
      position: relative;
      top: -1px;
    }

    .menu-icon-more {
      display: inline-block;
      font-size: 20px;
      margin-left: 12px;
    }

    ul {
      position: relative;
      left: 0;
      width: 100%;
      background: none;
      box-shadow: none;
      border-radius: none;
      padding: 0 0 0 72px;
        
      a {
        color: #9197b5;
        font-size: 14px;
        padding-left: 0;
        padding-right: 0;

        &:hover, &.active {
          color: #fff;
          background-color: transparent;
        }
      }

    }

    .show-sub {
      > a, > span {
        color: #fff;
        .menu-icon-more {
          transform: rotate(180deg) !important;
        }
      }
      > ul {
      display: block;
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
`

const LoginBtn = styled.a`
  display: inline-block;
  font-size: 13px;
  border: none;
  color: #9197b5;
  padding: 10px 0;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
  margin: 0 24px;
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

const CampaignHeader = styled.div`
  padding: 10px 0;
  margin: 0 -32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3543c6;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.17;
  p, a {
    margin: 0;
    padding: 0;
    color: #ffffff;
  }
  p{
    padding: 0 10px 0 0;
  }
  a{
    text-decoration: underline
  }
  svg{
    margin: 0 10px 0 0;
  }
  @media screen and (max-width: 1199px) {
    margin: 0 -16px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

class Header extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.toggleShowSub = this.toggleShowSub.bind(this)
    this.handleScroll = this.handleScroll.bind(this)

    this.state = {
      menuOpen: false,
      headerShow: true,
      scrollPos: 0,
      activeMenuFeatures: false,
      activeMenuResources: false,
      showSub: null
    }
  }
  toggle() {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  toggleShowSub(name) {
    if (!this.state.menuOpen) {
      return
    }

    this.setState(prevState => ({
      showSub: prevState.showSub === name ? null : name
    }))


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

    let path = this.props.langs[0].link
    path = path.split('/')[1]
    let subMenuFeatures = [
      'smart-suggestion',
      'expense-management',
      'travel-policy-management',
      'rewards-program'
    ]

    for (const s of subMenuFeatures) {
      if (path === s) {
        this.setState({ activeMenuFeatures: true })
      }
    }

    let subMenuResources = [
      'blog',
      'remote-work-expense-management',
    ]

    for (const s of subMenuResources) {
      if (path === s) {
        this.setState({ activeMenuResources: true })
      }
    }

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    let subNavigation = (
      <SubNav navbar>
        <SelectLanguage langs={this.props.langs} />

        <LoginBtn href={`/app/?lang=${this.props.langKey}`}>
          <FormattedMessage id={`${scope}.login`} />
        </LoginBtn>

        <StartBtn to={`${this.props.langUri}/request-demo`}>
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
      <>

        <HeaderWrapper className={headerClassName}>
          <CampaignHeader>
            <p>
              <Icon icon={outlineNewReleases} color="#fff" width="20px" height="20px" />
              New!  Simplify your expense claim even at home with
            </p>
            <a href={`${this.props.langUri}remote-work-expense-management`} target="_blank">
              Remote Work and Expense Management Solution
              </a>
          </CampaignHeader>
          <HeaderNavbar>
            <MenuToggler onClick={this.toggle}>
              <Icon icon={baselineMoreVert} />
            </MenuToggler>

            <HeaderNavBrand to={`${this.props.langUri}`}>
              <img src={companyLogo} alt="" />
            </HeaderNavBrand>

            <HeaderCollapse className={menuOpen ? 'menu-open' : ''}>
              <div className="inner">
                <StartBtn to={`${this.props.langUri}/request-demo`}>
                  <FormattedMessage id={`${scope}.getStarted`} />
                </StartBtn>

                <MainNav navbar>
                  <li>
                    <Link activeClassName="active" to={`${this.props.langUri}`}>
                      <Icon className="menu-icon" icon={bxHomeAlt} />
                      <FormattedMessage id={`${scope}.home`} />
                    </Link>
                  </li>
                  <li className={this.state.showSub ? 'show-sub' : ''}>
                    <span
                      className={this.state.activeMenuFeatures ? 'active' : ''}
                      onClick={this.toggleShowSub.bind(this, 'features')}
                    >
                      <Icon className="menu-icon" icon={baselinePostAdd} />
                      <FormattedMessage id={`${scope}.feature`} />
                      <Icon className="menu-icon-more" icon={bxChevronDown} />
                    </span>
                    <ul>
                      <li>
                        <Link activeClassName="active" to={`${this.props.langUri}/smart-suggestion/`}>
                          <FormattedMessage id={`${scope}.smartSuggestion`} />
                        </Link>
                      </li>
                      <li>
                        <Link activeClassName="active" ineHome to={`${this.props.langUri}/expense-management/`}>
                          <FormattedMessage id={`${scope}.expenseManagement`} />
                        </Link>
                      </li>
                      <li>
                        <Link activeClassName="active" to={`${this.props.langUri}/travel-policy-management/`}>
                          <FormattedMessage id={`${scope}.travelPolicyManagement`} />
                        </Link>
                      </li>
                      <li>
                        <Link activeClassName="active" to={`${this.props.langUri}/rewards-program/`}>
                          <FormattedMessage id={`${scope}.rewardsProgram`} />
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link activeClassName="active" to={`${this.props.langUri}/pricing/`}>
                      <Icon className="menu-icon" icon={baselineCreditCard} />
                      <FormattedMessage id={`${scope}.pricing`} />
                    </Link>
                  </li>
                  <li>
                    <Link activeClassName="active" to={`${this.props.langUri}/about/`}>
                      <FormattedMessage id={`${scope}.aboutUs`} />
                    </Link>
                  </li>
                  <li className={this.state.showSub ? 'show-sub' : ''}>
                    <span
                      className={this.state.activeMenuResources ? 'active' : ''}
                      onClick={this.toggleShowSub.bind(this, 'resources')}
                    >
                      <Icon className="menu-icon" icon={baselinePostAdd} />
                      {/* <FormattedMessage id={`${scope}.feature`} /> */}
                        Resources
                      <Icon className="menu-icon-more" icon={bxChevronDown} />
                    </span>
                    <ul>
                      <li>
                        <a href={formatMessage({
                          id: 'link.blog'
                        })} target="_blank" rel="noopener noreferrer">
                          <Icon className="menu-icon" icon={baselinePictureInPicture} />
                          <FormattedMessage id={`${scope}.blog`} />
                        </a>
                      </li>
                      <li>
                        <Link activeClassName="active" ineHome to={`${this.props.langUri}/remote-work-expense-management/`}>
                          {/* <FormattedMessage id={`${scope}.expenseManagement`} /> */}
                          Remote Work Expense Management
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href={formatMessage({
                      id: 'link.support'
                    })} target="_blank" rel="noopener noreferrer">
                      <Icon className="menu-icon" icon={outlineAnnouncement} />
                      <FormattedMessage id={`${scope}.support`} />
                    </a>
                  </li>
                </MainNav>
                <SelectLanguage langs={this.props.langs} />
              </div>
              <span className="close-btn" onClick={this.toggle}>
                <Icon icon={baselineClose} />
              </span>
            </HeaderCollapse>

            {menuOpen && <Overlay onClick={this.toggle} />}
            {subNavigation}
          </HeaderNavbar>
        </HeaderWrapper>
      </>
    )
  }
}

export default injectIntl(Header)
