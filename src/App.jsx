import { Route, Routes } from 'react-router-dom'
import './App.css'
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
    </Routes>
    <Footer/>
    </>
  )
}

export default App
