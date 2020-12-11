import styled, { css } from 'styled-components'

import { FlexItemProps } from './index'

export const FlexItem = styled.div<FlexItemProps>`
  border: 1px solid;
  padding: 5px;
  display: flex;
  border: 3px solid #FFF;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.2rem;
  color: #FFF;
  font-weight: bold;
  font-size: 2rem;
  background: #F65627;

  ${({ alignSelf, active }) => active && css`align-self: ${alignSelf};`}
  ${({ grow, active }) => active && css`flex-grow: ${grow};`}
  ${({ shrink, active }) => active && css`flex-shrink: ${shrink};`}
  ${({ basis, active }) => active && css`flex-basis: ${basis};`}
`