import { TbankClient } from './tbank-client'

describe('TbankClient', () => {
  describe('basic flows', () => {
    it('experiments', async () => {
      const client = new TbankClient({ secret: process.env.TBANK__API_TOKEN! })

      const instruments = await client.investments.findInstrument({ query: 'SNGS' })
      expect(instruments).toBeDefined()
    })
  })
})
