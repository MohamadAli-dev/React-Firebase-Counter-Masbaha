import React from 'react'
import { useState, useEffect } from 'react'
import './counter.css'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [counters, setCounters] = useState({
    "سبحان الله": 0,
    "الحمدلله": 0,
    "لا إله إلا الله": 0,
    "الله أكبر": 0,
    "رب اغفر لي": 0,
    "استغفر الله": 0,
    "لا حول ولا قوة إلا بالله": 0,
    "اللهمَّ إنك عفوٌّ تُحبُّ العفوَ فاعفُ عنِّي": 0,
    "اللهم صل وسلم وبارك على سيدنا محمد": 0,
    "سبحان الله وبحمده سبحان الله العظيم": 0,
    "سبحان الله والحمد لله ولا إله إلا الله والله أكبر": 0,
    "أستغفر الله الذى لا إله إلا هو الحي القيوم وأتوب إليه": 0,
    "لا اله الا انت سبحانك إني كنت من الظالمين": 0,
    "سبحان الله وبحمده عدد خلقه ورضا نفسه وزنة عرشه ومداد كلماته": 0,
    "لا إله إلا الله وحده لا شريك لهُ ، لهُ الملك ، ولهُ الحمدُ ، وهو على كل شيء قدير": 0,
  })

  const onIncrement = (key) => {
    setCounters(counters => {
      const newCounters = { ...counters, [key]: counters[key] + 1 }
      localStorage.setItem('counters', JSON.stringify(newCounters))
      return newCounters
    })
  }

  const onResetAll = () => {
    setCounters(counters => {
      const newCounters = {
        "سبحان الله": 0,
        "الحمدلله": 0,
        "لا إله إلا الله": 0,
        "الله أكبر": 0,
        "رب اغفر لي": 0,
        "استغفر الله": 0,
        "لا حول ولا قوة إلا بالله": 0,
        "اللهمَّ إنك عفوٌّ تُحبُّ العفوَ فاعفُ عنِّي": 0,
        "اللهم صل وسلم وبارك على سيدنا محمد": 0,
        "سبحان الله وبحمده سبحان الله العظيم": 0,
        "سبحان الله والحمد لله ولا إله إلا الله والله أكبر": 0,
        "أستغفر الله الذى لا إله إلا هو الحي القيوم وأتوب إليه": 0,
        "لا اله الا انت سبحانك إني كنت من الظالمين": 0,
        "سبحان الله وبحمده عدد خلقه ورضا نفسه وزنة عرشه ومداد كلماته": 0,
        "لا إله إلا الله وحده لا شريك لهُ ، لهُ الملك ، ولهُ الحمدُ ، وهو على كل شيء قدير": 0,
      }
      localStorage.setItem('counters', JSON.stringify(newCounters))
      return newCounters
    })
  }

  const onReset = (key) => {
    setCounters(counters => {
      const newCounters = { ...counters, [key]: 0 }
      localStorage.setItem('counters', JSON.stringify(newCounters))
      return newCounters
    })
  }

  useEffect(() => {
    const initialValue = localStorage.getItem('counters')
    if (initialValue) setCounters(JSON.parse(initialValue))
  }, [])


  return (

    <div className="container m-3 mx-auto text-center">
      <h1 className='text-center head'>Masbaha Online</h1>
      <div className="d-flex justify-content-around mb-3">
        <button
          className="btn btn-danger decrement"
          onClick={onResetAll}
          style={{ cursor: 'pointer' }}
        >
          تصفير العدادات
        </button>
      </div>

      <div className="row">
        {
          Object.keys(counters).map(key => (
            <div key={key} className='col-12 col-md-6 col-lg-4 mb-4'>
              <div className="card text-center border-primary box-card">
                <h1 className="card-header header-text">{key}</h1>

                <div className="card-body">
                  <div className="d-flex justify-content-end">
                    <button className="btn btn-danger btn-sm reset-counter" onClick={() => { onReset(key) }}>
                      <i className="fas fa-undo"></i>
                    </button>
                  </div>

                  <div className="d-flex justify-content-center">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center increment-btn"
                      onClick={() => { onIncrement(key) }}
                    >
                      <h2 className="mb-3 mt-2" style={{
                        fontSize: '2.5em',
                        color: 'white'
                      }}>
                        {counters[key]}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Counter
