import React, { useState } from 'react'

export function App() {
  const [result, setResult] = useState('0')

  const handleClear = () => {
    setResult('0')
  }

  const handleNumber = (e) => {
    // Overwrite '0' placeholder or previous result after (handleCalc).
    if (result === '0' || result[0] === ' ') {
      setResult(e.target.textContent)
    } else {
      // Otherwise, continue adding characters to current equation.
      setResult(result + e.target.textContent)
    }
  }

  const handleOperator = (e) => {
    // If state is the result of previous equation (handleCalc), remove beginning blank space so that (handleNumber) does not erase equation.
    if (result[0] === ' ') {
      setResult(result.substring(1) + e.target.textContent)
    } else {
      setResult(result + e.target.textContent)
    }
  }

  const handleCalc = (e) => {
    const temp = eval(result)
    // Shift result with blank space so that the next button press does not treat state like the middle of an equation.
    setResult(' ' + temp)
  }

  return (
    <>
      <h1>Calculator</h1>
      <main>
        <div className="calculator">
          <div className="display">{result}</div>
          <button onClick={handleClear} className="AC">
            AC
          </button>
          <button onClick={handleOperator} className="divide">
            /
          </button>
          <button onClick={handleNumber} className="seven">
            7
          </button>
          <button onClick={handleNumber} className="eight">
            8
          </button>
          <button onClick={handleNumber} className="nine">
            9
          </button>
          <button onClick={handleOperator} className="times">
            *
          </button>
          <button onClick={handleNumber} className="four">
            4
          </button>
          <button onClick={handleNumber} className="five">
            5
          </button>
          <button onClick={handleNumber} className="six">
            6
          </button>
          <button onClick={handleOperator} className="minus">
            -
          </button>
          <button onClick={handleNumber} className="one">
            1
          </button>
          <button onClick={handleNumber} className="two">
            2
          </button>
          <button onClick={handleNumber} className="three">
            3
          </button>
          <button onClick={handleOperator} className="plus">
            +
          </button>
          <button onClick={handleNumber} className="zero">
            0
          </button>
          <button onClick={handleNumber} className="dot">
            .
          </button>
          <button onClick={handleCalc} className="equals">
            =
          </button>
        </div>
      </main>
    </>
  )
}
