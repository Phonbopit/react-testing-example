const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// mock names
const names = [
  {
    id: 1,
    name: 'Chuck Norris'
  },
  {
    id: 2,
    name: 'John Doe'
  }
]

export const getName = async (id) => {
  await delay(1000)

  return names.find((name) => name.id === id)
}
