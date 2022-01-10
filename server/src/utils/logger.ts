const info = (...params) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(...params)
  }
}

const errors = (...params) => {
  if (process.env.NODE_ENV !== 'production') {
    console.error(...params)
  }
}

export { info, errors }
