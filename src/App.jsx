import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Productlist from './components/Productlist'
import { Route, Routes } from 'react-router-dom'
import Productdetails from './components/Productdetails'
import Contact from './components/Contact'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/home' element={<Productlist />} />
        <Route path='/details/:id' element={<Productdetails />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
      
    </>
  )
}

export default App
