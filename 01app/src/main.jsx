import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter , createRoutesFromElements } from "react-router-dom"
import Home from "./Components/Home"
import Layout from './Components/Layout'
import About from './Components/About'
import Contact from './Components/Contact'
import { Login } from './Components/Login'
import { Error404 } from "./Components/Error404";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Login/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='*' element={<Error404/>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)