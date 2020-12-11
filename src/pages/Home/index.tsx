import React, { useRef } from 'react'

import Container, { FlexContainerProps } from '../../components/Flexbox/Container'
import FlexContainerControl from '../../components/FlexContainerControl'

const Home: React.FC = () => {

  const containerRef = useRef<FlexContainerProps>(null)

  return (
    <>
      <FlexContainerControl refContainer={containerRef} />
      <Container ref={containerRef}></Container>
    </>
  )
}

export default Home