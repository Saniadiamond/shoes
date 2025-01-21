import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Contact from './Pages/Contact'
import Register from './Pages/Register'
import About from './Pages/About'
import Menu from './Pages/Menu'
import Footer from './Pages/Footer'
import Home from './Pages/Home'

export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="menu" element={<Menu />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}

export default App
