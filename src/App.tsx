import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import './scss/main.scss'
import { DetailMovie, Home } from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<DetailMovie />} />
      </ Routes>
    </BrowserRouter>
  )
}

export default App
