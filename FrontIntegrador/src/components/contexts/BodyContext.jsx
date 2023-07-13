import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const BodyContext = createContext()

const BodyContextProvider = ({ children }) => {

  const [localizaciones, setLocalizaciones] = useState([])
  const [isLike, setIsLike] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [allDates, setAllDates] = useState([])
  const [categorias, setCategorias] = useState([])
  const [selectedCity, setSelectedCity] = useState({})
  const apiUrl = "http://demeters.sytes.net:6780";

  useEffect(() => {
    axios.get(`${apiUrl}/api/ubicacion`)
      .then(res => setLocalizaciones(res.data))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    axios.get(`${apiUrl}/api/categoria`)
      .then(res => setCategorias(res.data))
      .catch(err => console.log(err))
  }, [])

  const randomLocation = Math.floor(localizaciones.length * Math.random())

  const data = {

    localizaciones,
    setLocalizaciones,
    isLike,
    setIsLike,
    randomLocation,
    dateRange,
    setDateRange,
    allDates,
    setAllDates,
    categorias,
    setCategorias,
    selectedCity,
    setSelectedCity,
    apiUrl
  }

  return (
    <BodyContext.Provider value={data}>
      {children}
    </BodyContext.Provider>
  )
}

export default BodyContextProvider