import axios from 'axios';
import React, { createContext, useState } from 'react'

export const HeaderContext = createContext()

const HeaderContextProvider = ({ children }) => {

  const [headerType, setHeaderType] = useState('initial');
  const [isLog, setIsLog] = useState(false)
  const [currentUser, setCurrentUser] = useState(undefined)

  const data = {
    headerType,
    setHeaderType,
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