import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react'
import asteriskIcon from '@iconify/icons-el/asterisk'

const Marker = styled.span.attrs({ className: 'RequiredMarker' })`
  color: #ce8832;
  font-size: 8px;
  font-weight: normal;
  margin-left: 8px;
  position: relative;
  top: -3px;
`

const RequiredMarker = () => (
  <Marker>
    <Icon icon={asteriskIcon} />
  </Marker>
)

export default RequiredMarker
