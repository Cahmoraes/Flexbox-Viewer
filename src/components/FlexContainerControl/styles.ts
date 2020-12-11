import styled from 'styled-components'

export const ContainerControl = styled.div`
  padding: 2rem 0;
`

export const FlexControl = styled.div`
  border: 1px solid #4282CC;
  border-radius: 3px;
  max-width: 300px;

  h3 {
    color: #FFF;
    background: #4282CC;
    text-align: center;
    padding: .4rem 0;
  }

  & > div {
    margin: 0.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    &:nth-child(2n) {
      background-color: #EFEFEF;
    }
  }

  label {
    font-size: 1.4rem;
    &::after {
      content: ':';
    }
  }
`