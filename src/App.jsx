import { Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
    </Routes>
    
    </>
  )
}

export default App
