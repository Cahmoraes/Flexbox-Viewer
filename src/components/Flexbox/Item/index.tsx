import React from 'react'
import { FlexItem } from './styles'

export interface FlexItemProps {
  alignSelf?: string
  grow?: number
  shrink?: number
  basis?: string
}

const Item: React.FC<FlexItemProps> = ({
  alignSelf = 'stretch',
  grow = 0,
  shrink = 1,
  basis = 'auto',
  children
}) => {
  return (
    <FlexItem alignSelf={alignSelf} grow={grow} shrink={shrink} basis={basis}>
      {children}
    </FlexItem>
  )
}

export default Item