import { getName } from './fetchData'

// Test can run with async/await
describe('#getName', () => {
  it('should return Chuck Norris when input 1', async () => {
    const id = 1

    const result = await getName(id)

    expect(result).toEqual({
      id: 1,
      name: 'Chuck Norris'
    })
  })

  it('should return undefined when not found name', async () => {
    const id = 9999

    const result = await getName(id)

    expect(result).toBeUndefined()
  })
})

describe('Bad name', () => {
  it('should work', async () => {
    expect(await getName(9999)).toBeUndefined()
  })

  it('return undefined', async () => {
    expect(await getName(9999)).toBeUndefined()
  })
})
