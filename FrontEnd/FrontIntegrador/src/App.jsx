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
import MyReservations from './components/pages/MyReservations'
import Administration from './components/pages/Administration'
import AddCarForm from './components/commons/AddCarForm'
import AdminHome from './components/pages/AdminHome'

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
                <Route path='/car/:id' element={<CarDetails />} />
                <Route path='/category/:name' element={<CarsCategory />} />
                <Route path='/results/:fechaInicio/:fechaFin/:ubicacionId' element={<SearchResults />} />
                <Route path='/cars/:id/reservation' element={<Reservation />} />
                <Route path='/:userId/reservations' element={<MyReservations />} />
                <Route path='/administration' element={<Administration />} >
                  <Route path='/administration/' element={<AdminHome />}/>
                  <Route path='/administration/newcar' element={<AddCarForm />}/>
                </Route>
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
