import styled, { css } from 'styled-components'

export interface FlexContainerProps {
  direction?: string
  wrap?: string
  justify?: string
  align?: string
}

export const FlexContainer = styled.div<FlexContainerProps>`
  background: tomato;
  border: 1px solid;
  display: flex;
  ${({ justify }) => css`justify-content: ${justify};`}
  ${({ align }) => css`align-items: ${align};`}
  ${({ wrap }) => css`align-items: ${wrap};`}
  ${({ direction }) => css`align-items: ${direction};`}
`