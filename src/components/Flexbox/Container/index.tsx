import React, { forwardRef, useImperativeHandle, useState, useCallback } from 'react'

import { JustifyContent, AlignContent, Wrap, Direction } from '../../../types/types-flex'
import { FlexItem } from '../Item/styles'
import { FlexContainer } from './styles'

export interface FlexContainerProps {
  handleJustify: (justify: JustifyContent) => void
}

const Container: React.ForwardRefRenderFunction<FlexContainerProps> = ({ children }, ref) => {

  const handleJustify = useCallback((justify: JustifyContent) => {
    setJustify(justify)
  }, [])

  const handleAlign = useCallback((align: AlignContent) => {
    setAlign(align)
  }, [])

  const handleWrap = useCallback((wrap: Wrap) => {
    setWrap(wrap)
  }, [])

  const handleDirection = useCallback((direction: Direction) => {
    setDirection(direction)
  }, [])

  const [justify, setJustify] = useState<JustifyContent>('flex-start')
  const [align, setAlign] = useState<AlignContent>('stretch')
  const [wrap, setWrap] = useState<Wrap>('nowrap')
  const [direction, setDirection] = useState<Direction>('row')

  useImperativeHandle(ref, () => {
    return {
      handleJustify,
      handleAlign,
      handleWrap,
      handleDirection
    }
  })

  return (
    <FlexContainer justify={justify} align={align} direction={direction} wrap={wrap}>
      <FlexItem>1</FlexItem>
      <FlexItem>2</FlexItem>
      <FlexItem>3</FlexItem>
    </FlexContainer>
  )
}

export default forwardRef(Container)