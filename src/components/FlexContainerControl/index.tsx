import React, { ChangeEvent, useCallback } from 'react'
import { JustifyContent } from '../../types/types-flex'

import { FlexContainerProps } from '../Flexbox/Container'

interface FlexContainerControlProps {
  refContainer: React.RefObject<FlexContainerProps>
}

const FlexContainerControl: React.FC<FlexContainerControlProps> = ({ refContainer }) => {

  const handleJustify = useCallback((event: ChangeEvent) => {
    const value = (event.target as HTMLInputElement).value as JustifyContent
    refContainer.current?.handleJustify(value)
  }, [refContainer])

  return (
    <>
      <h1>Control</h1>
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
    </>
  )
}

export default FlexContainerControl