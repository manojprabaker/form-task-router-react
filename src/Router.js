import React from 'react'
import {BrowserRouter, Route, Routes,Navigate} from "react-router-dom";
import Form from './Form/Form';
import List from './List/List';
const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Form/>}/> 
    <Route path="/List" element={<List/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default Router