import React, { forwardRef, useImperativeHandle, useState, useCallback } from 'react'

import { JustifyContent, AlignContent, Wrap, Direction, AlignItems } from '../../../types/types-flex'
import { FlexItem } from '../Item/styles'
import { FlexContainer } from './styles'

export interface FlexContainerProps {
  handleJustify: (justify: JustifyContent) => void
  handleAlign: (align: AlignItems) => void
  handleAlignContent: (align: AlignContent) => void
  handleWrap: (wrap: Wrap) => void
  handleDirection: (direction: Direction) => void
}

const Container: React.ForwardRefRenderFunction<FlexContainerProps> = ({ children }, ref) => {

  const handleJustify = useCallback((justify: JustifyContent) => {
    setJustify(justify)
  }, [])

  const handleAlign = useCallback((align: AlignItems) => {
    setAlign(align)
  }, [])

  const handleAlignContent = useCallback((align: AlignContent) => {
    setAlignContent(align)
  }, [])

  const handleWrap = useCallback((wrap: Wrap) => {
    setWrap(wrap)
  }, [])

  const handleDirection = useCallback((direction: Direction) => {
    setDirection(direction)
  }, [])

  const [justify, setJustify] = useState<JustifyContent>('flex-start')
  const [align, setAlign] = useState<AlignItems>('stretch')
  const [wrap, setWrap] = useState<Wrap>('nowrap')
  const [direction, setDirection] = useState<Direction>('row')
  const [alignContent, setAlignContent] = useState('normal')

  useImperativeHandle(ref, () => {
    return {
      handleJustify,
      handleAlign,
      handleWrap,
      handleDirection,
      handleAlignContent
    }
  })

  return (
    <FlexContainer justify={justify} align={align} direction={direction} wrap={wrap} alignContent={alignContent}>
      <FlexItem>1</FlexItem>
      <FlexItem>2</FlexItem>
      <FlexItem>3</FlexItem>
    </FlexContainer>
  )
}

export default forwardRef(Container)