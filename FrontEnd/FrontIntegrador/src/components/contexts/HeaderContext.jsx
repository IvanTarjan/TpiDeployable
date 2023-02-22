import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const HeaderContext = createContext()

const HeaderContextProvider = ({ children }) => {

  const [headerType, setHeaderType] = useState('initial');
  const [users, setUsers] = useState([])
  const [isLog, setIsLog] = useState(false)
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    axios.get("http://localhost:5000/users")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }, [])

  const data = {
    headerType,
    setHeaderType,
    users,
    setUsers,
    isLog,
    setIsLog,
    currentUser,
    setCurrentUser
  }

  return (
    <HeaderContext.Provider value={data}>
      {children}
    </HeaderContext.Provider>
  )
}

export default HeaderContextProvider