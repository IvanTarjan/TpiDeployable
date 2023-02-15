import './App.css'
import Header from './components/pages/Header'
import Body from './components/pages/Body'
import Footer from './components/pages/Footer'
import HeaderContextProvider from './components/contexts/HeaderContext'
import CreateAccount from './components/pages/CreateAccount'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <HeaderContextProvider>
        <BrowserRouter>
          <Header />
          <Footer />
          <Routes>
            <Route path='/register' element={<CreateAccount />} ></Route>
          </Routes>

        </BrowserRouter>
      </HeaderContextProvider>

    </div>
  )
}

export default App
