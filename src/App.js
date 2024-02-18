import React from 'react'
import List from './pages/List'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Main>
      <Footer />
    </>
  )
}

export default App