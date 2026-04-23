import React from 'react'
import { Routes,Route,Link } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/navigation/Navbar'
import FullscreenNav from './components/navigation/FullscreenNav'


const App = () => {

  
  return (
    <div  className='text-white overflow-x-hidden'>
      <Navbar/>
      <FullscreenNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/agence' element={<Agence/>}/>
        <Route path='/projects' element={<Projects/>}/>

      </Routes>
    </div>
  )
}

export default App
   