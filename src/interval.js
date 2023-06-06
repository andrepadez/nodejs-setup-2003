const setup = () => {
  let count = 0
  setInterval(() => console.log(++count, 'hello world'), 1000)
}

export default setup
