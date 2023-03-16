import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const BodyContext = createContext()

const BodyContextProvider = ({ children }) => {
  const [cars, setCars] = useState([])
  const [localizaciones, setLocalizaciones] = useState([])
  const [isLike, setIsLike] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [allDates, setAllDates] = useState([])
  const [categorias, setCategorias] = useState([])
  const [selectedCity, setSelectedCity] = useState(null)


  useEffect(() => {
    axios.get("http://ec2-3-138-67-153.us-east-2.compute.amazonaws.com:8080/producto")
      .then(res => setCars(res.data))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    axios.get("http://ec2-3-138-67-153.us-east-2.compute.amazonaws.com:8080/ubicacion")
      .then(res => setLocalizaciones(res.data))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    axios.get("http://ec2-3-138-67-153.us-east-2.compute.amazonaws.com:8080/categoria")
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
    setSelectedCity
  }

  return (
    <BodyContext.Provider value={data}>
      {children}
    </BodyContext.Provider>
  )
}

export default BodyContextProvider