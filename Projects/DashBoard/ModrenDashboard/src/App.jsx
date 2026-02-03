import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter, Outlet } from 'react-router-dom'
import Layout from './Components/Layout'
import { Routes, Route } from 'react-router-dom'

import Dashboard from './Pages/Dashboard'
import UserDetail from './Pages/UserDetail'



const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
function App() {

  return (
    <Routes>
      {/* 1. Parent Route (The Shell) */}
      <Route path="/" element={<Layout />}>

        {/* 2. Child Route (The Content) */}
        {/* This renders at "/" inside the Layout's Outlet */}
        <Route index element={<Dashboard />} />

        {/* This renders at "/user/1" inside the Layout's Outlet */}
        <Route path="user/:id" element={<UserDetail />} />
      </Route>
    </Routes>
  )
}

export default App
