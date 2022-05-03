import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Import components
import Home from './Home'
import LaunchIndex from './components/LaunchIndex'
import LaunchShow from './components/LaunchShow'
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
          
          {/* Need to put in path */}
          <Route path="/launches/:id" element={<LaunchShow />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App