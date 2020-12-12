import React, { forwardRef, useImperativeHandle, useState, useCallback, useEffect } from 'react'

import { JustifyContent, AlignContent, Wrap, Direction, AlignItems } from '../../../types/types-flex'
import Item from '../Item'

import { FlexContainer } from './styles'

export interface FlexContainerProps {
  handleJustify: (justify: JustifyContent) => void
  handleAlign: (align: AlignItems) => void
  handleAlignContent: (align: AlignContent) => void
  handleWrap: (wrap: Wrap) => void
  handleDirection: (direction: Direction) => void,
  handleQtdItem: (qtdItem: any[]) => void
}

const Container: React.ForwardRefRenderFunction<FlexContainerProps> = ({ children }, ref) => {

  const [justify, setJustify] = useState<JustifyContent>('flex-start')
  const [align, setAlign] = useState<AlignItems>('stretch')
  const [wrap, setWrap] = useState<Wrap>('nowrap')
  const [direction, setDirection] = useState<Direction>('row')
  const [alignContent, setAlignContent] = useState('normal')
  const [qtdFlexItem, setQtdFlexItem] = useState<any[]>([''])

  useEffect(() => {
    console.log(qtdFlexItem)
  }, [qtdFlexItem])

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

  const handleQtdItem = useCallback((qtdItem: any[]) => {
    setQtdFlexItem(qtdItem)
  }, [])

  useImperativeHandle(ref, () => {
    return {
      handleJustify,
      handleAlign,
      handleWrap,
      handleDirection,
      handleAlignContent,
      handleQtdItem
    }
  })

  return (
    <FlexContainer
      justify={justify}
      align={align}
      direction={direction}
      wrap={wrap}
      alignContent={alignContent}
    >
      {
        // (Array.apply(null, Array(qtdFlexItem)).map((i, index) => (
        //   <Item key={index}>{index + 1}</Item>
        // )))

        qtdFlexItem.map((i, index) => (
          <Item key={index}>{index + 1}</Item>
        ))
      }
    </FlexContainer>
  )
}

export default forwardRef(Container)