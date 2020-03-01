import React from 'react'
import styled from 'styled-components'

const StyledDynamicComponent = styled.div``

// @see https://medium.com/harrys-engineering/creating-a-typography-system-with-react-and-styled-components-ae3661369266
const DynamicComponent = ({ tag = 'div', children, ...props }) => {
  const WithComponent = StyledDynamicComponent.withComponent(tag)

  return <WithComponent {...props}>{children}</WithComponent>
}

DynamicComponent.defaultProps = {
  tag: 'div'
}

export default DynamicComponent
