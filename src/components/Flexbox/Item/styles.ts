import styled, { css } from 'styled-components'

import { FlexItemProps } from './index'

export const FlexItem = styled.div<FlexItemProps>`
  border: 1px solid;
  padding: 5px;
  display: flex;
  ${({ alignSelf }) => css`align-self: ${alignSelf};`}
  ${({ grow }) => css`flex-grow: ${grow};`}
  ${({ shrink }) => css`flex-shrink: ${shrink};`}
  ${({ basis }) => css`flex-basis: ${basis};`}
`