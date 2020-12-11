import React from 'react'
import { FlexItem } from './styles'

export interface FlexItemProps {
  active?: boolean
  alignSelf?: string
  grow?: number
  shrink?: number
  basis?: string
}

const Item: React.FC<FlexItemProps> = ({
  active = false,
  alignSelf = 'stretch',
  grow = 0,
  shrink = 1,
  basis = 'auto',
  children
}) => {
  return (
    <FlexItem active={active} alignSelf={alignSelf} grow={grow} shrink={shrink} basis={basis}>
      {children}
    </FlexItem>
  )
}

export default Item