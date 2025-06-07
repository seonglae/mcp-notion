import { describe, it, expect, vi } from 'vitest'
import { getPageDescription } from '../src/resources/index.js'

vi.mock('@texonom/nutils', () => ({
  getBlockTitle: (block: any) => block.title,
}))

describe('getPageDescription', () => {
  it('returns first block title when length > 50', () => {
    const longTitle = 'a'.repeat(60)
    const recordMap = { block: { first: { value: { title: longTitle } } } } as any
    const block = { content: ['first'] } as any
    const result = getPageDescription(block, recordMap)
    expect(result).toBe(longTitle)
  })

  it('joins first and second titles when first is short', () => {
    const recordMap = {
      block: {
        first: { value: { title: 'First' } },
        second: { value: { title: 'Second' } },
      },
    } as any
    const block = { content: ['first', 'second'] } as any
    const result = getPageDescription(block, recordMap)
    expect(result).toBe('First\nSecond')
  })
})
