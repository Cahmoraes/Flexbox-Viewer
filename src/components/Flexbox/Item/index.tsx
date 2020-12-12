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

  const closeToolTip = useCallback((event: SyntheticEvent<HTMLDivElement>) => {
    setShowTooltip(false)
  }, [])

  const openToolTip = useCallback((event: SyntheticEvent<HTMLDivElement>) => {
    setShowTooltip(true)
  }, [])

  const handleAlignSelf = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    setStateAlignSelf(event.target.value)
  }, [])

  return (
    <>
      <FlexItem
        onMouseOver={openToolTip}
        onMouseLeave={closeToolTip}
        active={active}
        alignSelf={stateAlignSelf}
        grow={grow}
        shrink={shrink}
        basis={basis}
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
            </Tooltip>
          )
        }
        {children}
      </FlexItem>
    </>
  )
}

export default Item