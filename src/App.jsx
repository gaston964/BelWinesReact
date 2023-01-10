import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import MyForm from './components/MyForm'
import Navbar from './components/Navbar'
import Promos from './components/Promos'
import SobreNos from './components/SobreNos'


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<SobreNos />} />
        <Route path='/promos' element={<Promos/>} />
        <Route path='/vinos' element={<ItemListContainer />} />
        <Route path='/vinos/category/:id' element={<ItemListContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/form' element={<MyForm />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
