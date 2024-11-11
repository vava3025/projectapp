import Navbar from './components/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Header from './components/Header'
import Login from './footer/Login'
import { useState } from 'react'
import Signup from './footer/Signup'
import Kids from './footer/Kids'
import Women from './footer/Women'
import Men from './footer/Men'
import Allproduct from './footer/Allproduct'
import Search from './footer/Search'
import Cart from './footer/Cart'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     
     <Routes>
          <Route path="/" element={<Header/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/kids" element={<Kids/>}></Route>
          <Route path="/women" element={<Women/>}></Route>
          <Route path="/men" element={<Men/>}></Route>
          <Route path="/all" element={<Allproduct/>}></Route>
          {/* <Route path="/search" element={<Search/>} ></Route> */}
          <Route path="/cart"element={<Cart/>}></Route>
     </Routes> 
    </>
    
  )
}
export default App







