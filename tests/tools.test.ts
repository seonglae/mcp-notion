import { describe, it, expect, vi } from 'vitest'
import { setListTools } from '../src/tools/index.js'
import { ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js'

describe('setListTools', () => {
  it('registers the list tools handler and returns search_notes', async () => {
    const server = { setRequestHandler: vi.fn() }
    // @ts-ignore - passing partial server
    setListTools(server as any)
    expect(server.setRequestHandler).toHaveBeenCalledOnce()
    const [schema, handler] = (server.setRequestHandler as any).mock.calls[0]
    expect(schema).toBe(ListToolsRequestSchema)
    const result = await handler()
    expect(result.tools[0].name).toBe('search_notes')
  })
})
