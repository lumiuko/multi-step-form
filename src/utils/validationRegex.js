const validationRegex = {
  text: /^\w{2,}$/,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  tel: /^[\+\d]?(?:[\d-.\s()]*)$/
}

export default validationRegex
