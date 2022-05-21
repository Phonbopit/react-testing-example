import isEmail from './isEmail'

describe('#isEmail', () => {
  it('should return TRUE when valid email address', () => {
    // Arrange
    const email = 'hello@example.com'

    // Act
    const result = isEmail(email)

    // Assert
    expect(result).toBeTruthy()
  })

  it('should return FALSE when invalid email address', () => {
    // Given
    const email = 'invalid'

    // When
    const result = isEmail(email)

    // Then
    expect(result).toBeFalsy()
  })
})

// BDD Style
describe('Given that user input email address', () => {
  describe('When user input email hello@example.com', () => {
    test('Then it should valid email', () => {
      const email = 'hello@example.com'

      const result = isEmail(email)

      expect(result).toBeTruthy()
    })
  })
})
