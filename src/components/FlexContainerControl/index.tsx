import React, { ChangeEvent, useCallback } from 'react'
import { AlignContent, AlignItems, JustifyContent, Wrap, Direction } from '../../types/types-flex'

import { FlexContainerProps } from '../Flexbox/Container'

interface FlexContainerControlProps {
  refContainer: React.RefObject<FlexContainerProps>
}

const FlexContainerControl: React.FC<FlexContainerControlProps> = ({ refContainer }) => {

  const handleJustify = useCallback((event: ChangeEvent) => {
    const value = (event.target as HTMLInputElement).value as JustifyContent
    refContainer.current?.handleJustify(value)
  }, [refContainer])

  const handleAlign = useCallback((event: ChangeEvent) => {
    const value = (event.target as HTMLInputElement).value as AlignItems
    refContainer.current?.handleAlign(value)
  }, [refContainer])

  const handleAlignContent = useCallback((event: ChangeEvent) => {
    const value = (event.target as HTMLInputElement).value as AlignContent
    refContainer.current?.handleAlignContent(value)
  }, [refContainer])

  const handleWrap = useCallback((event: ChangeEvent) => {
    const value = (event.target as HTMLInputElement).value as Wrap
    refContainer.current?.handleWrap(value)
  }, [refContainer])

  const handleDirection = useCallback((event: ChangeEvent) => {
    const value = (event.target as HTMLInputElement).value as Direction
    refContainer.current?.handleDirection(value)
  }, [refContainer])

  return (
    <>
      <h1>Control</h1>

      <div>
        <label htmlFor="direction-select">Justify</label>
        <select
          name="direction-select"
          onChange={handleDirection}
        >
          <option value="row">row</option>
          <option value="column">column</option>
        </select>
      </div>

      <div>
        <label htmlFor="justify-select">Justify</label>
        <select
          name="justify-select"
          onChange={handleJustify}
        >
          <option value="flex-start">start</option>
          <option value="center">center</option>
          <option value="flex-end">end</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
          <option value="space-evenly">space-evenly</option>
        </select>
      </div>

      <div>
        <label htmlFor="align-select">Align Items</label>
        <select
          name="align-select"
          onChange={handleAlign}
        >
          <option value="stretch" defaultValue="stretch">stretch</option>
          <option value="flex-start">start</option>
          <option value="center">center</option>
          <option value="flex-end">end</option>
        </select>
      </div>

      <div>
        <label htmlFor="alignContent-select">Align Content</label>
        <select
          name="alignContent-select"
          onChange={handleAlignContent}
        >
          <option value="normal">normal</option>
          <option value="flex-start">start</option>
          <option value="center">center</option>
          <option value="flex-end">end</option>
          <option value="stretch">stretch</option>
          <option value="space-around">space-around</option>
          <option value="space-between">space-between</option>
          <option value="space-evenly">space-evenly</option>
        </select>
      </div>

      <div>
        <label htmlFor="align-select">Wrap</label>
        <select
          name="wrap-select"
          onChange={handleWrap}
        >
          <option value="nowrap">nowrap</option>
          <option value="wrap">wrap</option>
        </select>
      </div>

    </>
  )
}

export default FlexContainerControl