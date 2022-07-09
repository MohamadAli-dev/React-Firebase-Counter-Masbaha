import React from 'react'
import { useState, useEffect } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const onIncrement = () => {
    setCount((prevCount) => {
      const newCount = Number(prevCount) + 1
      localStorage.setItem('count', newCount)
      return newCount
    })
  }

  const onReset = () => {
    setCount(0)
    window.localStorage.setItem('count', 0)
  }

  useEffect(() => {
    const initialValue = localStorage.getItem('count')
    if (initialValue) setCount(initialValue)
  }, [])

  const getCount = localStorage.getItem('count')

  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Masbaha12</h1>
          <div className="my-5">
            <h2 className="my-5">Count: {getCount}</h2>
            <button className="btn btn-success mx-3" onClick={onIncrement}>
              Increment
            </button>
            <button className="btn btn-secondary mx-3" onClick={onReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter
