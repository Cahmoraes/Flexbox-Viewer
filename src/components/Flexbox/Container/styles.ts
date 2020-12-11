import styled, { css } from 'styled-components'
import arrow from '../../../assets/img/arrow.png'
import arrow_alt from '../../../assets/img/arrow_alt.png'

export interface FlexContainerProps {
  direction?: string
  wrap?: string
  justify?: string
  align?: string
  alignContent?: string
}

export const FlexContainer = styled.div<FlexContainerProps>`
  height: 30vh;
  border: 1px solid;
  display: flex;
  ${({ justify }) => css`justify-content: ${justify};`}
  ${({ align }) => css`align-items: ${align};`}
  ${({ wrap }) => css`flex-wrap: ${wrap};`}
  ${({ direction }) => {
    let background
    if (direction === 'row') {
      background = css`background: url('${arrow}') repeat-x;`
    }
    else {
      background = css`background: url('${arrow_alt}') repeat-y;`
    }
    return css`
      flex-direction: ${direction};
      ${background}
    `
  }}
  ${({ alignContent }) => css`align-content: ${alignContent};`}

  background-position: center center;
  background-color: #4481CA;
  background-size: 20px;
`