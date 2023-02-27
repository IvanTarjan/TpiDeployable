import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const BodyContext = createContext()

const BodyContextProvider = ({ children }) => {
  const [cars, setCars] = useState([])
  const [localizaciones, setLocalizaciones] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/cars")
      .then(res => setCars(res.data))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    axios.get("http://localhost:5000/localizaciones")
      .then(res => setLocalizaciones(res.data))
      .catch(err => console.log(err))
  }, [])


  const data = {
    cars,
    setCars,
    localizaciones,
    setLocalizaciones
  }

  return (
    <BodyContext.Provider value={data}>
      {children}
    </BodyContext.Provider>
  )
}

export default BodyContextProvider