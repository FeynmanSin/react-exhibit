import React, { useEffect, useState } from 'react'

const TestPage = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let id = setInterval(() => {
      setCount(0 + 1);
    }, 1000)
    return (() => {
      clearInterval(id)
    })
  })
  return (
    <div>{count}</div>
  )
}

export default TestPage