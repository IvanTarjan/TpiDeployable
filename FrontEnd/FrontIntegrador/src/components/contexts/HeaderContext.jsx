import React, { createContext, useState } from 'react'

export const HeaderContext = createContext()

const HeaderContextProvider = ({ children }) => {

  const [headerType, setHeaderType] = useState('initial');
  const [user, setUser] = useState()

  const data = {
    headerType,
    setHeaderType,
    user,
    setUser
  }

  return (
    <HeaderContext.Provider value={data}>
      {children}
    </HeaderContext.Provider>
  )
}

export default HeaderContextProvider