import React, { useRef } from 'react'

import Container, { FlexContainerProps } from '../../components/Flexbox/Container'
import FlexContainerControl from '../../components/FlexContainerControl'

import { ContainerHome } from './styles'

const Home: React.FC = () => {

  const containerRef = useRef<FlexContainerProps>(null)

  return (
    <ContainerHome>
      <FlexContainerControl refContainer={containerRef} />
      <Container ref={containerRef}></Container>
    </ContainerHome>
  )
}

export default Home