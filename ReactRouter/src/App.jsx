import React from 'react'
import Navbar from './Components/Navbar'
import { Routes ,Route} from 'react-router-dom'
import Products from './pages/Products.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home'


const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App