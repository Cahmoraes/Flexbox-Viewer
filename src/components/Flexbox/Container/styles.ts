import styled, { css } from 'styled-components'

export interface FlexContainerProps {
  direction?: string
  wrap?: string
  justify?: string
  align?: string
  alignContent?: string
}

export const FlexContainer = styled.div<FlexContainerProps>`
  height: 30vh;
  background: tomato;
  border: 1px solid;
  display: flex;
  ${({ justify }) => css`justify-content: ${justify};`}
  ${({ align }) => css`align-items: ${align};`}
  ${({ wrap }) => css`flex-wrap: ${wrap};`}
  ${({ direction }) => css`flex-direction: ${direction};`}
  ${({ alignContent }) => css`align-content: ${alignContent};`}
`