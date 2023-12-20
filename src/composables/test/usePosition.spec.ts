import { describe, expect, it } from 'vitest'
import { reactive } from 'vue'
import { STEP_EDIT, usePositon } from '../usePosition'

describe('usePositon', () => {
  // 一个测试只做一件事
  it('should return positon', () => {
    const pos = {
      x: 1,
      y: 1
    }
    const { position } = usePositon(pos)
    expect(position.value).toEqual({
      left: '32px',
      top: '32px'
    })
  })
  it('should set positon step', () => {
    const pos = {
      x: 1,
      y: 1
    }
    const { position } = usePositon(pos, STEP_EDIT)
    expect(position.value).toEqual({
      left: '34px',
      top: '34px'
    })
  })
  it('should update positon when reactive data change', () => {
    const pos = reactive({
      x: 1,
      y: 1
    })
    const { position } = usePositon(pos)
    pos.x = 2
    expect(position.value).toEqual({
      left: '64px',
      top: '32px'
    })
  })
})
