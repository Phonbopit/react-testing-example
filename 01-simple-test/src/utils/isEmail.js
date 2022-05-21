const isEmail = (email) => {
  const regex = new RegExp(/^[^@\s]+@[^@\s.]+\.[^@.\s]+$/)
  return regex.test(email)
}

export default isEmail
