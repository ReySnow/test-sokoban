import { describe, expect, it } from 'vitest'
import { useDrag } from '../useDrag'

describe('useDrag', () => {
  it('should be true when startDrag', () => {
    const { startDrag, isDragging } = useDrag()
    startDrag()
    expect(isDragging()).toBe(true)
  })
  it('should be false when stopDrag', () => {
    const { startDrag, stopDrag, isDragging } = useDrag()
    startDrag()
    stopDrag()
    expect(isDragging()).toBe(false)
  })
})
