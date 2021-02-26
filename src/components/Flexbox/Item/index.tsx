import React, { useCallback, useState, ChangeEvent, MouseEvent, useRef } from 'react'

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
  alignSelf = 'auto',
  grow = 0,
  shrink = 1,
  basis = 'auto',
  children
}) => {

  const [stateCheckedActive, setCheckedStateActive] = useState(false)
  const [stateAlignSelf, setStateAlignSelf] = useState(alignSelf)
  const [stateGrow, setStateGrow] = useState(grow)
  const [stateShrink, setStateShrink] = useState(shrink)
  const [stateBasis, setStateBasis] = useState(basis)

  const tooltipRef = useRef<HTMLDivElement>(null)

  const closeToolTip = useCallback(() => {
    if (tooltipRef.current) {
      tooltipRef.current.style.display = 'none'
    }
  }, [])

  const openToolTip = useCallback((event: MouseEvent<HTMLElement>) => {
    const element = event.currentTarget as HTMLElement
    if (tooltipRef.current) {
      tooltipRef.current.style.display = 'block'
      console.log(element.offsetLeft, element.offsetWidth, window.innerWidth)
      if (element.offsetLeft + element.offsetWidth + element.offsetWidth + 21 >= window.innerWidth) {
        console.log('aqui 2')
        const difference = (window.innerWidth - element.offsetLeft) - (element.offsetLeft + element.offsetWidth - window.innerWidth)
        tooltipRef.current.style.left = `${element.offsetLeft - difference + 'px'}`
      } else {
        tooltipRef.current.style.left = `${event.clientX + 'px'}`
      }
      tooltipRef.current.style.top = `${element.offsetTop - 140 + 'px'}`
    }
  }, [])

  const handleTooltip = useCallback((event: MouseEvent<HTMLDivElement>) => {
    const currentTarget = event.currentTarget
    const outsideClick = 'outside-click'

    if (!document.body.getAttribute(outsideClick)) {
      document.body.addEventListener('click', outsideMouse)
      document.body.setAttribute(outsideClick, 'true')
      openToolTip(event)
    }

    function outsideMouse(event: Event) {
      if (!currentTarget.contains(event.target as HTMLElement)) {
        closeToolTip()
        document.body.removeEventListener('click', outsideMouse)
        document.body.removeAttribute(outsideClick)
      }
    }
  }, [closeToolTip, openToolTip])

  const handleAlignSelf = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    if (stateCheckedActive) {
      setStateAlignSelf(event.target.value)
    }
  }, [stateCheckedActive])

  const handleFlexGrow = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setStateGrow(parseInt(event.target.value, 10) || 0)
  }, [])

  const handleFlexShrink = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setStateShrink(parseInt(event.target.value, 10) || 0)
  }, [])

  const handleFlexBasis = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setStateBasis(event.target.value)
  }, [])

  const handleActiveState = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.checked) {
      setStateAlignSelf('auto')
    }
    setCheckedStateActive(event.target.checked)
  }, [])



  return (
    <>
      <FlexItem
        onClick={handleTooltip}
        active={active}
        alignSelf={stateAlignSelf}
        grow={stateGrow}
        shrink={stateShrink}
        basis={stateBasis}
      >
        {
          <Tooltip ref={tooltipRef}>
            <div>
              <label htmlFor="align-select">Active</label>
              <input
                type="checkbox"
                name="active-state"
                checked={stateCheckedActive}
                onChange={handleActiveState}
              />
            </div>
            <div>
              <label htmlFor="align-select">Align Self</label>
              <select
                name="align-select"
                onChange={handleAlignSelf}
                value={stateAlignSelf}
              >
                <option value="auto" defaultValue="auto">auto</option>
                <option value="stretch">stretch</option>
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
        }
        {children}
      </FlexItem>
    </>
  )
}

export default Item