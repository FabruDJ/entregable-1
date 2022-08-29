import { useState } from 'react'
import quotes from './quotes.json'
import './App.css'

function App() {

  const [index, setIndex] = useState(0)

  const changeQuotes = () => {
    setIndex(Math.floor(Math.random() * quotes.length))
  }

  const colors = ["#6882D6", "#C880D3", "#C880D3", "#FF9E8B", "#FFC96B", "#F9F871"];
  const changeColor = Math.floor(Math.random() * colors.length)

  document.body.style = `background: ${colors[changeColor]}`

  return (
    <div className="App">
      <div className="card">
        <div className="text-container">
          <div className="text-quote">
            <div className="decoration">
            <i className="fa-solid fa-quote-left" style={{color: colors[changeColor]}}></i>
            </div>
            <p className='quote'>{quotes[index].quote}</p>
          </div>
          <div className="text-author">
            <p>{quotes[index].author}</p>
          </div>
        </div>
        <div className="btn-container">
          <button onClick={changeQuotes} className='btn' style={{background: colors[changeColor]}}>
          <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
