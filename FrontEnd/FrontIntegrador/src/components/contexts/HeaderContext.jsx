import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const HeaderContext = createContext()

const HeaderContextProvider = ({ children }) => {

  const [headerType, setHeaderType] = useState('initial');
  const [users, setUsers] = useState([])
  const [isLog, setIsLog] = useState(false)
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    axios.get("http://ec2-3-138-67-153.us-east-2.compute.amazonaws.com:8080/usuario")
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