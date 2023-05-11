import React from 'react'
import Restaurent from './Restaurent'
import Header from './Header';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import RestView from './RestView'


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Restaurent />} />
        <Route path='/viewRest/:id' element={<RestView/>} />
      </Routes>
    </div>
  )
}

export default App;