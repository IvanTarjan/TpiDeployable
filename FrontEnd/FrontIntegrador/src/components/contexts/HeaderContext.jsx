import React, { createContext, useState } from 'react'

export const HeaderContext = createContext()

const HeaderContextProvider = ({ children }) => {

  const [headerType, setHeaderType] = useState('initial');
  const [newUser, setNewUser] = useState(null)
  const [user, setUser] = useState(null)

  const data = {
    headerType,
    setHeaderType,
    newUser,
    setNewUser,
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