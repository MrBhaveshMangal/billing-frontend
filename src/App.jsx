import React from 'react'
import Menubar from './Components/Menubar/Menubar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './assets/Pages/Dashboard/Dashboard'
import ManageCategory from './assets/Pages/ManageCategory/ManageCategory'
import ManageUsers from './assets/Pages/ManageUsers/ManageUsers'
import ManageItems from './assets/Pages/ManageItems/ManageItems'
import Explore from './assets/Pages/Explore/Explore'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <Menubar />
      <Toaster/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} ></Route>
        <Route path="/category" element={<ManageCategory />}></Route>
        <Route path="/users" element={<ManageUsers />}></Route>
        <Route path="/items" element={<ManageItems />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/" element={<Dashboard />}></Route>
        
      </Routes>
    </div>
  )
}

export default App