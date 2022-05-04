import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Import components
import Home from './Home'
import LaunchIndex from './components/LaunchIndex'
import CrewIndex from './components/CrewIndex'
import LaunchShow from './components/LaunchShow'
import CrewShow from './components/CrewShow'
import PageNav from './components/PageNav'


const App = () => {
  return (
    <>
      <h1></h1>
      <BrowserRouter>
        <PageNav />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/launches" element={<LaunchIndex />} />
          <Route path="/crew" element={<CrewIndex />} />
          
          {/* Need to put in path */}
          <Route path="/launches/:id" element={<LaunchShow />} />
          <Route path="/crew/:id" element={<CrewShow />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App