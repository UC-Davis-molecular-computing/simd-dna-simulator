import React from 'react'
import { Cell } from './features/cell/Cell'
import { Strand } from './features/strand/Strand'
import './App.css'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <Cell />
        <Strand />
      </header>
    </div>
  )
}

export default App
