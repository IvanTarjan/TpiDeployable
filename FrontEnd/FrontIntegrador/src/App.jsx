import './App.css'
import Header from './components/pages/Header'
import Body from './components/pages/Body'
import Footer from './components/pages/Footer'
import HeaderContextProvider from './components/contexts/HeaderContext'
import CreateAccount from './components/pages/CreateAccount'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login'
import Palette from './components/contexts/ThemeContext'
import DetallesProducto from './components/pages/DetallesProducto'

function App() {
  return (
    <div>
      <Palette>
        <HeaderContextProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/register' element={<CreateAccount />}/>
              <Route path='/login' element={<Login />} />
              <Route path='/producto/:id' element={<DetallesProducto />} />
              <Route path='/' element={<Body />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </HeaderContextProvider>
      </Palette>
    </div>
  )
}

export default App
