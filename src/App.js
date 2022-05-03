import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Import components
import Home from './components/Home'
import LaunchIndex from './components/LaunchIndex'
import LaunchShow from './components/LaunchShow'
import PageNav from './components/PageNav'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <PageNav />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/launches" element={<LaunchIndex />} />
          
          {/* Need to put in path */}
          <Route path="/launches" element={<LaunchShow />} />
          <h1>Project 2</h1>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App