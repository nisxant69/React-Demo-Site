
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import DetailsPage from './pages/DetailsPage'
import Prices from './pages/Prices'
import Login from './pages/Login'
import Blog from './pages/Blog'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/register' element={<Register />} /> ✅ Register component */}
        <Route path='/details' element={<DetailsPage />} />
        <Route path='/prices' element={<Prices />} />
        <Route path='/login' element={<Login />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
