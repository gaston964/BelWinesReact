import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import SobreNos from './components/SobreNos'

function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<SobreNos/>}/>
      <Route path='/vinos' element={<ItemListContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
