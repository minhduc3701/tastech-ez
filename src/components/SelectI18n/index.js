import React from 'react'
import Select from 'react-select'
import { injectIntl } from 'react-intl'
import _ from 'lodash'

const SelectI18n = props => {
  let options = props.options.map(option => ({
    ...option,
    value: option.value,
    label: props.intl.formatMessage({ id: option.labelId }, option.i18nValues)
  }))

  let value = ''

  if (_.isObject(props.value)) {
    value = {
      ...props.value,
      value: props.value.value,
      label: props.intl.formatMessage(
        { id: props.value.labelId },
        props.value.i18nValues
      )
    }
  }

  let i18nProps = {
    options,
    value
  }

  return <Select {...props} {...i18nProps} />
}

export default injectIntl(SelectI18n)
