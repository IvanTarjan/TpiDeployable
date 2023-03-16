import './App.css'
import Header from './components/pages/Header'
import Body from './components/pages/Body'
import Footer from './components/pages/Footer'
import HeaderContextProvider from './components/contexts/HeaderContext'
import CreateAccount from './components/pages/CreateAccount'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login'
import Palette from './components/contexts/ThemeContext'
import CarDetails from './components/pages/CarDetails'
import BodyContextProvider from './components/contexts/BodyContext'
import CarsCategory from './components/pages/CarsCategory'
import SearchResults from './components/pages/SearchResults'
import Reservation from './components/pages/Reservation'

function App() {
  return (
    <div>
      <BodyContextProvider>
        <Palette>
          <HeaderContextProvider>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path='/register' element={<CreateAccount />} />
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Body />} />
                <Route path='/category/:name/car/:id' element={<CarDetails />} />
                <Route path='/category/:name' element={<CarsCategory />} />
                <Route path='/results/' element={<SearchResults />} />
                <Route path='/cars/:id/reservation' element={<Reservation />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </HeaderContextProvider>
        </Palette>
      </BodyContextProvider>
    </div>
  )
}

export default App
