import './App.css'
import Header from './components/pages/Header'
import Body from './components/pages/Body'
import Footer from './components/pages/Footer'
import BarraDeBusqueda from './components/pages/BarraDeBusqueda'
import HeaderContextProvider from './components/contexts/HeaderContext'
import CreateAccount from './components/pages/CreateAccount'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login'
import Palette from './components/contexts/ThemeContext'

function App() {
  return (
    <div>
      <Palette>

        <HeaderContextProvider>
          <BrowserRouter>
            <Header />
            <BarraDeBusqueda />
            <Routes>
              <Route path='/register' element={<CreateAccount />} ></Route>
              <Route path='/login' element={<Login />} />
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
