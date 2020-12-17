import styled, { css } from 'styled-components'

import { FlexItemProps } from './index'

export const FlexItem = styled.div<FlexItemProps>`
  border: 1px solid;
  padding: 5px;
  display: flex;
  border: 3px solid #FFF;
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
  ${({ basis, active }) => active && css`flex-basis: ${basis === 'auto' ? basis : basis + 'px'};`}
`

export const Tooltip = styled.div`
  font-size: 1.4rem;
  padding: .5rem;
  box-shadow: 0 0 0 2px #FB5, 0 0 0 6px rgba(0,0,0, .6);
  border-radius: 2px;
  position: absolute;
  background: #CCC;
  display: none;
  z-index: 9;
  width: 168px;
  &::after {
    content: '';
    position: absolute;
    left: 27%;
    top: 100%;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 9px solid transparent;
    border-top: 8px solid #CCC;
    clear: both;
    z-index: 10;
  }
`