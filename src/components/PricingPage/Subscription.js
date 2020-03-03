import React from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'
import { Wrapper, Summary, Heading, List } from './SubscriptionStyle'

import { Icon } from '@iconify/react'
import baselineCheck from '@iconify/icons-ic/baseline-check'
import baselineClose from '@iconify/icons-ic/baseline-close'
import arrowRight from '@iconify/icons-mdi/arrow-right'

import { FormattedMessage } from 'react-intl'
const scope = 'containers.pricingPlan.Subscription'

const Subscription = props => {
  let futureFeatures = [
    'transportation',
    'restaurant',
    'group',
    'advanceSupport',
    'insurance'
  ]

  let notedFeatures = [
    'combo',
    'transportation',
    'restaurant',
    'basicSupport',
    'advanceSupport',
    'insurance'
  ]

  return (
    <Wrapper className={!props.price ? 'free' : ''}>
      <Summary>
        <div className="name">
          <FormattedMessage id={`${scope}.${props.name}`} />
        </div>
        <div className="price font-number">
          {props.price ? (
            <React.Fragment>
              <span className="amount">
                {props.price}
                <span className="currency">{props.currency}</span>
              </span>
            </React.Fragment>
          ) : (
            <FormattedMessage id={`${scope}.priceFree`} />
          )}
        </div>
        <div className="period">
          <FormattedMessage id={`${scope}.${props.period}`} />
        </div>

        <div className="desc">
          <FormattedMessage id={`${scope}.${props.name}_desc`} />
        </div>

        <Link to="/request-demo">
          {!props.price ? (
            <FormattedMessage id={`${scope}.getStartedForFree`} />
          ) : (
            <FormattedMessage id={`${scope}.startFreeTrial`} />
          )}
          <Icon icon={arrowRight} />
        </Link>
      </Summary>

      {props.features.map((group, index) => (
        <div key={index}>
          <Heading>
            <FormattedMessage id={`${scope}.${group.category}`} />
          </Heading>
          <List>
            {Object.keys(_.omit(group, ['category'])).map((feature, idx) => (
              <li
                key={idx}
                className={
                  !group[feature] || _.includes(futureFeatures, feature)
                    ? 'disabled'
                    : ''
                }>
                {group[feature] ? (
                  <Icon icon={baselineCheck} />
                ) : (
                  <Icon icon={baselineClose} />
                )}
                <span
                  className={
                    _.includes(notedFeatures, feature)
                      ? 'text-has-underline'
                      : ''
                  }>
                  <FormattedMessage id={`${scope}.${feature}`} />
                </span>
                &nbsp;
                {_.includes(futureFeatures, feature) && ' *'}
                {_.includes(notedFeatures, feature) && (
                  <div className="note">
                    <FormattedMessage id={`${scope}.${feature}.note`} />
                    <span className="arr" />
                  </div>
                )}
              </li>
            ))}
          </List>
        </div>
      ))}
    </Wrapper>
  )
}

export default Subscription
