
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Header from './pages/components/Header'
import Footer from './pages/components/Footer'

function App() {
  
  return (
    <>
    <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>

        
       </Routes>
       <Footer/>
    </>
  )
}

export default App
