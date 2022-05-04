import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Import components
import LaunchIndex from './components/LaunchIndex'
import CrewIndex from './components/CrewIndex'
import LaunchShow from './components/LaunchShow'
import CrewShow from './components/CrewShow'
import PageNav from './components/PageNav'
import GalleryShow from './components/GalleryShow'


const App = () => {
  return (
    <>

      <BrowserRouter>
        <PageNav />
        <Routes>


          <Route path="/launches" element={<LaunchIndex />} />
          <Route path="/crew" element={<CrewIndex />} />
  
          
          {/* Need to put in path */}
          <Route path="/launches/:id" element={<LaunchShow />} />
          <Route path="/crew/:id" element={<CrewShow />} />
          <Route path="launches/:id/gallery" element={<GalleryShow />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App