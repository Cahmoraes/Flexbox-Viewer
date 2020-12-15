import React, { useCallback, SyntheticEvent, useState, ChangeEvent } from 'react'

import { FlexItem, Tooltip } from './styles'

export interface FlexItemProps {
  active?: boolean
  alignSelf?: string
  grow?: number
  shrink?: number
  basis?: string
}

const Item: React.FC<FlexItemProps> = ({
  active = true,
  alignSelf = 'stretch',
  grow = 0,
  shrink = 1,
  basis = 'auto',
  children
}) => {

  const [showTooltip, setShowTooltip] = useState(false)
  const [stateAlignSelf, setStateAlignSelf] = useState(alignSelf)
  const [stateGrow, setStateGrow] = useState(grow)
  const [stateShrink, setStateShrink] = useState(shrink)
  const [stateBasis, setStateBasis] = useState(basis)

  const closeToolTip = useCallback((event: SyntheticEvent<HTMLDivElement>) => {
    setShowTooltip(false)
  }, [])

  const openToolTip = useCallback((event: SyntheticEvent<HTMLDivElement>) => {
    setShowTooltip(true)
  }, [])

  const handleAlignSelf = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    setStateAlignSelf(event.target.value)
  }, [])

  const handleFlexGrow = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setStateGrow(parseInt(event.target.value, 10) || 0)
  }, [])

  const handleFlexShrink = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setStateShrink(parseInt(event.target.value, 10) || 0)
  }, [])

  const handleFlexBasis = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setStateBasis(event.target.value)
  }, [])



  return (
    <>
      <FlexItem
        onMouseOver={openToolTip}
        onMouseLeave={closeToolTip}
        active={active}
        alignSelf={stateAlignSelf}
        grow={stateGrow}
        shrink={stateShrink}
        basis={stateBasis}
      >
        {
          showTooltip && (
            <Tooltip>
              <div>
                <label htmlFor="align-select">Align Self</label>
                <select
                  name="align-select"
                  onChange={handleAlignSelf}
                  value={stateAlignSelf}
                >
                  <option value="stretch" defaultValue="stretch">stretch</option>
                  <option value="flex-start">start</option>
                  <option value="center">center</option>
                  <option value="flex-end">end</option>
                </select>
              </div>
              <div>
                <label htmlFor="flex-grow">Grow</label>
                <input
                  name="flex-grow"
                  onChange={handleFlexGrow}
                  type="number"
                  min="0"
                  value={stateGrow}
                >
                </input>
              </div>
              <div>
                <label htmlFor="flex-shrink">Shrink</label>
                <input
                  name="flex-shrink"
                  onChange={handleFlexShrink}
                  type="number"
                  min="0"
                  value={stateShrink}
                >
                </input>
              </div>
              <div>
                <label htmlFor="flex-basis">Basis</label>
                <input
                  name="flex-basis"
                  onChange={handleFlexBasis}
                  type="text"
                  value={stateBasis}
                >
                </input>
              </div>
            </Tooltip>
          )
        }
        {children}
      </FlexItem>
    </>
  )
}

export default Item