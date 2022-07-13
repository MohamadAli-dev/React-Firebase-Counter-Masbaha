import React from 'react'
import { useState, useEffect } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const onIncrement = () => {
    setCount((count) => {
      const newCount = Number(count) + 1
      localStorage.setItem('count', newCount)
      return newCount
    })
  }

  const onDecrement = () => {
      setCount((count) => {
        const newCount = Number(count) - 1
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

  const getCount = localStorage.getItem('count') || 0

  return (

    <div className="container my-5">
      <div className="d-flex justify-content-center mb-3">
        <button
          className="btn btn-danger decrement"
          onClick={onDecrement}
          disabled={count === 0}
          style={{ cursor: 'pointer' }}
        >
          تصغير العدادات
        </button>
      </div>

      <div className="card text-center border border-primary">
        <div className="border-bottom bg-secondary bg-opacity-10">
          <h1 className="my-5">سبحان اللّه</h1>
        </div>

        <div className="card-body">
          <div className="d-flex justify-content-end">
            <button className="btn btn-danger" onClick={onReset}>
              <i className="fas fa-undo" style={{ fontSize: "30px" }}></i>
            </button>
          </div>

          <div className="mb-5 d-flex justify-content-center">
            <div className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: '260px',
                height: '280px',
                backgroundColor: '#0060ff',
                cursor: 'pointer'
              }}
              onClick={onIncrement}
            >
              <h2 className="mb-3 mt-2" style={{
                fontSize: '5em',
                color: 'white'
              }}>
                {getCount}
              </h2>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}

export default Counter
