import React from 'react'
import Layout from './Layout'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Register from './Pages/Register'
import About from './Pages/About'
import Menu from './Pages/Menu'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Layout/>
      <Routes>
         <Route path='/'element={<Home/>} />
         <Route path='/Pages/Register'element={<Register/>} />
         <Route path='/Pages/About'element={<About/>} />
         
         <Route path='/Pages/Contact'element={<Contact/>} /> 
         <Route path='/Pages/Menu'element={<Menu/>} /> 
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
